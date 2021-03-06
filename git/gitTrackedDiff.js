const { exec } = require("child_process");
const util = require("util");
const execPromosified = util.promisify(exec);
const fetchRepoPath = require("../global/fetchGitRepoPath");
const { getStagedFiles } = require("./gitGetStagedFilesAPI");

/**
 * @param  {String} repoId
 */

async function gitTrackedDiff(repoId) {
  const repoPath = fetchRepoPath.getRepoPath(repoId);

  var responseObject = {
    gitChangedFiles: await getGitDiff(repoPath),
    gitUntrackedFiles: await getUntrackedFiles(repoPath),
    gitStagedFiles: await getStagedFiles(repoId),
  };

  console.log(responseObject);
  return responseObject;
}

/**
 * @param  {String} repoPath
 * @returns {Array}
 * @description - gets the list of files that have deviated from the HEAD
 */

async function getGitDiff(repoPath) {
  return await execPromosified(`git diff --raw`, {
    cwd: repoPath,
    windowsHide: true,
  })
    .then((res) => {
      const { stdout, stderr } = res;
      if (stdout) {
        var parsedEntry = stdout.trim().split("\n");

        var gitDifference = parsedEntry.map((entry) => {
          if (entry.split(/\s+/)) {
            let splitEntry = entry.split(/\s+/);
            if (splitEntry[4] && splitEntry[5]) {
              return (
                "" +
                splitEntry[4] +
                "," +
                splitEntry.slice(5, splitEntry.length).join(" ")
              );
            }
          }
        });

        return gitDifference.filter((entry) => (entry ? entry : ""));
      } else {
        console.log(stderr);
        return [];
      }
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
}

/**
 * @param  {String} repoPath
 * @returns {Array}
 * @description - gets the list of utracked files
 */

async function getUntrackedFiles(repoPath) {
  return await execPromosified(`git ls-files --others --exclude-standard`, {
    cwd: repoPath,
    windowsHide: true,
  }).then((res) => {
    const { stdout, stderr } = res;
    var parsedEntry = stdout
      .trim()
      .split("\n")
      .filter((item) => {
        if (item) {
          return item;
        }
      });

    var gitUntrackedFiles = parsedEntry.map((entry) => {
      let fileDirArray = [];
      if (entry.includes("/")) {
        let splitEntry = entry.split("/");
        let dirEntry = splitEntry.map((elm, index) => {
          if (index < entry.split("/").length - 1) {
            return elm;
          }
        });
        return `${dirEntry.join("/")},${splitEntry[splitEntry.length - 1]}`;
      } else {
        return `NO_DIR,${entry}`;
      }
    });
    return gitUntrackedFiles;
  });
}

module.exports.gitTrackedDiff = gitTrackedDiff;
