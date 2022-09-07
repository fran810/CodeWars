// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
function isIsogram(str){
    return str.toLowerCase().split('').filter((item, pos, arr)=> arr.indexOf(item) == pos).length == str.length;
  }