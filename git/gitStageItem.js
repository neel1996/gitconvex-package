const { exec } = require("child_process");
const util = require("util");
const fs = require("fs");
const execPromisified = util.promisify(exec);

const fetchRepopath = require("../global/fetchGitRepoPath");

/**
 * @param  {String} repoId
 * @param  {String} item
 * @description - stages the selected item
 */

const gitStageItem = async (repoId, item) => {
  const repoPath = fetchRepopath.getRepoPath(repoId);

  const fileItemValid = await fs.promises
    .stat(repoPath + "/" + item)
    .then((res) => res.isFile())
    .catch((err) => {
      console.log("ERROR: ", err);
      return undefined;
    });

  if (!fileItemValid) {
    const isRemovedFile = await execPromisified(`git ls-files --deleted`, {
      cwd: repoPath,
      windowsHide: true,
    })
      .then(({ stdout, stderr }) => {
        const deletedList = stdout.trim().split("\n");

        if (deletedList && deletedList.includes(item)) {
          return true;
        } else {
          return false;
        }
      })
      .catch((err) => {
        console.log("ERROR: ", err);
        return false;
      });

    if (!isRemovedFile) {
      console.log("Invalid item string");
      return "ADD_ITEM_FAILED";
    }
  }

  return await execPromisified(`git add "${item}"`, {
    cwd: repoPath,
    windowsHide: true,
  }).then(({ stdout, stderr }) => {
    if (stderr) {
      console.log(stderr);
      return "ADD_ITEM_FAILED";
    } else {
      console.log(stdout);
      return "ADD_ITEM_SUCCES";
    }
  });
};

module.exports.gitStageItem = gitStageItem;
