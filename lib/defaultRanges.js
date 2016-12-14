'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = {
  '오늘': {
    startDate: function startDate(now) {
      return now;
    },
    endDate: function endDate(now) {
      return now;
    }
  },

  '어제': {
    startDate: function startDate(now) {
      return now.add(-1, 'days');
    },
    endDate: function endDate(now) {
      return now.add(-1, 'days');
    }
  },

  '주간': {
    startDate: function startDate(now) {
      return now.startOf('week');
    },
    endDate: function endDate(now) {
      return now.endOf('week');
    }
  },

  '월간': {
    startDate: function startDate(now) {
      return now.startOf('month');
    },
    endDate: function endDate(now) {
      return now.endOf('month');
    }
  },

  '분기': {
    startDate: function startDate(now) {
      return now.startOf('quarter');
    },
    endDate: function endDate(now) {
      return now.endOf('quarter');
    }
  },

  '연간': {
    startDate: function startDate(now) {
      return now.startOf('year');
    },
    endDate: function endDate(now) {
      return now.endOf('year');
    }
  },

  '':{},

  '7일': {
    startDate: function startDate(now) {
      return now.add(-6, 'days');
    },
    endDate: function endDate(now) {
      return now;
    }
  },

  '30일': {
    startDate: function startDate(now) {
      return now.add(-29, 'days');
    },
    endDate: function endDate(now) {
      return now;
    }
  },

  '90일': {
    startDate: function startDate(now) {
      return now.add(-89, 'days');
    },
    endDate: function endDate(now) {
      return now;
    }
  },

  '180일': {
    startDate: function startDate(now) {
      return now.add(-179, 'days');
    },
    endDate: function endDate(now) {
      return now;
    }
  },

  '365일': {
    startDate: function startDate(now) {
      return now.add(-364, 'days');
    },
    endDate: function endDate(now) {
      return now;
    }
  }
};
module.exports = exports['default'];