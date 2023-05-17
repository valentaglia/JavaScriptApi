class Message {
    constructor(content) {
      this.content = content;
    }
  
    getStats() {
      const stats = {
        views: 46,
        likes: 10,
        dislikes: 2,
        word_count: this.content.split(' ').length,
        char_count: this.content.length
      };
  
      return stats;
    }
  }

  module.exports = Message;