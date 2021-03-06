(function() {
  String.prototype.blank = function() {
    var ref;
    return !((ref = this.replace(/^\s+|\s+|\n+$/g, '')) != null ? ref.length : void 0);
  };

  String.prototype.empty = function() {
    var ref;
    return !((ref = this.replace(/^\s+|\s+|\n+$/g, '')) != null ? ref.length : void 0);
  };

  String.prototype.present = function() {
    var ref;
    return !!((ref = this.replace(/^\s+|\s+|\n+$/g, '')) != null ? ref.length : void 0);
  };

  String.prototype.to_i = function() {
    return parseInt(this);
  };

  String.prototype.to_f = function() {
    return parseFloat(this);
  };

  String.prototype.capitalize = function() {
    return "" + (this.charAt(0).toUpperCase()) + (this.substr(1));
  };

  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '');
  };

  String.prototype.titleize = function() {
    var i, len, ref, title, word;
    title = '';
    ref = this.toLowerCase().split(' ');
    for (i = 0, len = ref.length; i < len; i++) {
      word = ref[i];
      title += (word.capitalize()) + " ";
    }
    return title.trim();
  };

}).call(this);
