(this.webpackJsonpgitconvex=this.webpackJsonpgitconvex||[]).push([[337],{417:function(e,t){!function(e){var t=/(?:"(?:""|[^"])*"(?!")|'(?:''|[^'])*'(?!'))/.source,a=/\b(?:\d[\da-f]*x|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,n={pattern:RegExp(t+"[bx]"),alias:"number"},s={pattern:/(^|\s+)(?:proc\s+\w+|quit|run|data(?!\=))\b/i,alias:"keyword",lookbehind:!0},i=[/\/\*[\s\S]*?\*\//,{pattern:/(^\s*|;\s*)\*[^;]*;/m,lookbehind:!0}],r={pattern:RegExp(t),greedy:!0},o=/[$%@.(){}\[\];,\\]/,l={pattern:/%?\w+(?=\()/,alias:"keyword"},c={function:l,"arg-value":{pattern:/(\s*=\s*)[A-Z\.]+/i,lookbehind:!0},operator:/=/,"macro-variable":{pattern:/&[^\.]*\./i,alias:"string"},arg:{pattern:/[A-Z]+/i,alias:"keyword"},number:a,"numeric-constant":n,punctuation:o,string:r},u={pattern:/\b(?:format|put)\b=?[\w'$.]+/im,inside:{keyword:/^(?:format|put)(?=\=)/i,equals:/=/,format:{pattern:/(?:\w|\$\d)+\.\d?/i,alias:"number"}}},p={pattern:/\b(?:format|put)\s+[\w']+(?:\s+[$.\w]+)+(?=;)/i,inside:{keyword:/^(?:format|put)/i,format:{pattern:/[\w$]+\.\d?/,alias:"number"}}},d={pattern:/((?:^|[\s])=?)(?:catname|checkpoint execute_always|dm|endsas|filename|footnote|%include|libname|%list|lock|missing|options|page|resetline|%run|sasfile|skip|sysecho|title\d?)\b/i,lookbehind:!0,alias:"keyword"},m={pattern:/(^|\s)(?:submit(?:\s+(?:load|parseonly|norun))?|endsubmit)\b/i,lookbehind:!0,alias:"keyword"},b=/accessControl|cdm|aggregation|aStore|ruleMining|audio|autotune|bayesianNetClassifier|bioMedImage|boolRule|builtins|cardinality|sccasl|clustering|copula|countreg|dataDiscovery|dataPreprocess|dataSciencePilot|dataStep|decisionTree|deepLearn|deepNeural|varReduce|simSystem|ds2|deduplication|ecm|entityRes|espCluster|explainModel|factmac|fastKnn|fcmpact|fedSql|freqTab|gam|gleam|graphSemiSupLearn|gVarCluster|hiddenMarkovModel|hyperGroup|image|iml|ica|kernalPca|langModel|ldaTopic|sparseML|mlTools|mixed|modelPublishing|mbc|network|optNetwork|neuralNet|nonlinear|nmf|nonParametricBayes|optimization|panel|pls|percentile|pca|phreg|qkb|qlim|quantreg|recommend|tsReconcile|deepRnn|regression|reinforcementLearn|robustPca|sampling|sparkEmbeddedProcess|search(?:Analytics)?|sentimentAnalysis|sequence|configuration|session(?:Prop)?|severity|simple|smartData|sandwich|spatialreg|stabilityMonitoring|spc|loadStreams|svDataDescription|svm|table|conditionalRandomFields|text(?:Rule(?:Develop|Score)|Mining|Parse|Topic|Util|Filters|Frequency)|tsInfo|timeData|transpose|uniTimeSeries/.source,g={pattern:RegExp(/(^|\s)(?:action\s+)?(?:<act>)\.[a-z]+\b[^;]+/.source.replace(/<act>/g,(function(){return b})),"i"),lookbehind:!0,inside:{keyword:RegExp(/(?:<act>)\.[a-z]+\b/.source.replace(/<act>/g,(function(){return b})),"i"),action:{pattern:/(?:action)/i,alias:"keyword"},function:l,"arg-value":c["arg-value"],operator:c.operator,comment:i,argument:c.arg,number:a,"numeric-constant":n,punctuation:o,string:r}},k={pattern:/((?:^|\s)=?)(?:after|analysis|and|array|barchart|barwidth|begingraph|by|call|cas|cbarline|cfill|class(?:lev)?|close|column|computed?|contains|continue|data(?=\=)|define|delete|describe|document|do\s+over|do|dol|drop|dul|end(?:source|comp)?|entryTitle|else|eval(?:uate)?|exec(?:ute)?|exit|fill(?:attrs)?|file(?:name)?|flist|fnc|function(?:list)?|goto|global|group(?:by)?|headline|headskip|histogram|if|infile|keep|keylabel|keyword|label|layout|leave|legendlabel|length|libname|loadactionset|merge|midpoints|name|noobs|nowd|_?null_|ods|options|or|otherwise|out(?:put)?|over(?:lay)?|plot|put|print|raise|ranexp|rannor|rbreak|retain|return|select|set|session|sessref|source|statgraph|sum|summarize|table|temp|terminate|then\s+do|then|title\d?|to|var|when|where|xaxisopts|yaxisopts|y2axisopts)\b/i,lookbehind:!0};e.languages.sas={datalines:{pattern:/^(\s*)(?:(?:data)?lines|cards);[\s\S]+?^\s*;/im,lookbehind:!0,alias:"string",inside:{keyword:{pattern:/^(?:(?:data)?lines|cards)/i},punctuation:/;/}},"proc-sql":{pattern:/(^proc\s+(?:fed)?sql(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|quit|run|data);|(?![\s\S]))/im,lookbehind:!0,inside:{sql:{pattern:RegExp(/^[ \t]*(?:select|alter\s+table|(?:create|describe|drop)\s+(?:index|table(?:\s+constraints)?|view)|create\s+unique\s+index|insert\s+into|update)(?:<str>|[^;"'])+;/.source.replace(/<str>/g,(function(){return t})),"im"),alias:"language-sql",inside:e.languages.sql},"global-statements":d,"sql-statements":{pattern:/(^|\s)(?:disconnect\s+from|exec(?:ute)?|begin|commit|rollback|reset|validate)\b/i,lookbehind:!0,alias:"keyword"},number:a,"numeric-constant":n,punctuation:o,string:r}},"proc-groovy":{pattern:/(^proc\s+groovy(?:\s+[\w|=]+)?;)(?:\s*submit)[\s\S]+?(?=^(?:proc\s+\w+|quit|run|data);|(?![\s\S]))/im,lookbehind:!0,inside:{groovy:{pattern:RegExp(/(^[ \t]*submit(?:\s+(?:load|parseonly|norun))?)(?:<str>|[^"'])+?(?=endsubmit;)/.source.replace(/<str>/g,(function(){return t})),"im"),lookbehind:!0,alias:"language-groovy",inside:e.languages.groovy},"submit-statement":m,"global-statements":d,number:a,"numeric-constant":n,punctuation:o,string:r}},"proc-lua":{pattern:/(^proc\s+lua(?:\s+[\w|=]+)?;)(?:\s*submit)[\s\S]+?(?=^(?:proc\s+\w+|quit|run|data);|(?![\s\S]))/im,lookbehind:!0,inside:{lua:{pattern:RegExp(/(^[ \t]*submit(?:\s+(?:load|parseonly|norun))?)(?:<str>|[^"'])+?(?=endsubmit;)/.source.replace(/<str>/g,(function(){return t})),"im"),lookbehind:!0,alias:"language-lua",inside:e.languages.lua},"submit-statement":m,"global-statements":d,number:a,"numeric-constant":n,punctuation:o,string:r}},"proc-cas":{pattern:/(^proc\s+cas(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|quit|data);|(?![\s\S]))/im,lookbehind:!0,inside:{"statement-var":{pattern:/((?:^|\s)=?)saveresult\s+[^;]+/im,lookbehind:!0,inside:{statement:{pattern:/^saveresult\s+\S+/i,inside:{keyword:/^(?:saveresult)/i}},rest:c}},"cas-actions":g,statement:{pattern:/((?:^|\s)=?)(?:default|(?:un)?set|on|output|upload)[^;]+/im,lookbehind:!0,inside:c},step:s,keyword:k,function:l,comment:i,format:u,altformat:p,"global-statements":d,number:a,"numeric-constant":n,punctuation:o,string:r}},"proc-args":{pattern:RegExp(/(^proc\s+\w+\s+)(?!\s)(?:[^;"']|<str>)+;/.source.replace(/<str>/g,(function(){return t})),"im"),lookbehind:!0,inside:c},"macro-keyword":{pattern:/((?:^|\s)=?)%(?:ABORT|BQUOTE|BY|CMS|COPY|DISPLAY|DO|ELSE|END|EVAL|GLOBAL|GO|GOTO|IF|INC|INCLUDE|INDEX|INPUT|KTRIM|LENGTH|LET|LIST|LOCAL|NRBQUOTE|NRQUOTE|NRSTR|PUT|QKTRIM|QSCAN|QSUBSTR|QSYSFUNC|QUOTE|QUPCASE|RETURN|RUN|SCAN|STR|SUBSTR|SUPERQ|SYMDEL|SYMGLOBL|SYMLOCAL|SYMEXIST|SYSCALL|SYSEVALF|SYSEXEC|SYSFUNC|SYSGET|SYSRPUT|THEN|TO|TSO|UNQUOTE|UNTIL|UPCASE|WHILE|WINDOW)\b/i,lookbehind:!0,alias:"keyword"},"macro-declaration":{pattern:/^%macro[^;]+(?=;)/im,inside:{keyword:/%macro/i}},"macro-end":{pattern:/^%mend[^;]+(?=;)/im,inside:{keyword:/%mend/i}},macro:{pattern:/%_\w+(?=\()/,alias:"keyword"},input:{pattern:/\binput\s+[-\w\s/*.$&]+;/i,inside:{input:{alias:"keyword",pattern:/^input/i},comment:i,number:a,"numeric-constant":n}},"options-args":{pattern:/(^options)[-'"|/\\<>*+=:()\w\s]*(?=;)/im,lookbehind:!0,inside:c},"cas-actions":g,comment:i,function:l,format:u,altformat:p,"numeric-constant":n,datetime:{pattern:RegExp(t+"(?:dt?|t)"),alias:"number"},string:r,step:s,keyword:k,"operator-keyword":{pattern:/\b(?:eq|ne|gt|lt|ge|le|in|not)\b/i,alias:"operator"},number:a,operator:/\*\*?|\|\|?|!!?|\xa6\xa6?|<[>=]?|>[<=]?|[-+\/=&]|[~\xac^]=?/i,punctuation:o}}(Prism)}}]);
//# sourceMappingURL=337.4b6ef6d3.chunk.js.map