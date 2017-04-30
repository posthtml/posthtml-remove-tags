module.exports = function (options) {
  
 var _tags =  options.tags.map(function(tag){
                  return { tag };
            });

  return function (tree) {
    tree.match(_tags, function(node){
      node.tag = false;
      node.content = [];
      return node;
    })
    return tree;
  }; 
};
