(this.webpackJsonpgitconvex=this.webpackJsonpgitconvex||[]).push([[194],{284:function(n,e){!function(n){var e=n.languages.javadoclike={parameter:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(e,"addSupport",{value:function(e,a){"string"==typeof e&&(e=[e]),e.forEach((function(e){!function(e,a){var t="doc-comment",o=n.languages[e];if(o){var i=o[t];if(!i){i=(o=n.languages.insertBefore(e,"comment",{"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}}))[t]}if(i instanceof RegExp&&(i=o[t]={pattern:i}),Array.isArray(i))for(var r=0,s=i.length;r<s;r++)i[r]instanceof RegExp&&(i[r]={pattern:i[r]}),a(i[r]);else a(i)}}(e,(function(n){n.inside||(n.inside={}),n.inside.rest=a}))}))}}),e.addSupport(["java","javascript","php"],e)}(Prism)}}]);
//# sourceMappingURL=194.b10f6152.chunk.js.map