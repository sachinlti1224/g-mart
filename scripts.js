(function($) {
  "use strict";
  var spinner = function() {
    setTimeout(function() {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner(0);
  $(window).scroll(function() {
    if ($(window).width() < 992) {
      if ($(this).scrollTop() > 55) {
        $(".fixed-top").addClass("shadow");
      } else {
        $(".fixed-top").removeClass("shadow");
      }
    } else {
      if ($(this).scrollTop() > 55) {
        $(".fixed-top").addClass("shadow").css("top", -55);
      } else {
        $(".fixed-top").removeClass("shadow").css("top", 0);
      }
    }
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 2e3,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>'
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 1
      },
      992: {
        items: 2
      },
      1200: {
        items: 2
      }
    }
  });
  $(".vegetable-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>'
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });
  $(document).ready(function() {
    var $videoSrc;
    $(".btn-play").click(function() {
      $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $("#videoModal").on("shown.bs.modal", function(e) {
      $("#video").attr("src", $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    });
    $("#videoModal").on("hide.bs.modal", function(e) {
      $("#video").attr("src", $videoSrc);
    });
  });
  $(".quantity button").on("click", function() {
    var button = $(this);
    var oldValue = button.parent().parent().find("input").val();
    if (button.hasClass("btn-plus")) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
    button.parent().parent().find("input").val(newVal);
  });
})(jQuery);
!function(n) {
  "function" == typeof define && define.amd ? define(["jquery"], function(e) {
    return n(e);
  }) : "object" == typeof module && "object" == typeof module.exports ? exports = n(require("jquery")) : n(jQuery);
}(function(n) {
  function e(n2) {
    var e2 = 7.5625, t2 = 2.75;
    return n2 < 1 / t2 ? e2 * n2 * n2 : n2 < 2 / t2 ? e2 * (n2 -= 1.5 / t2) * n2 + 0.75 : n2 < 2.5 / t2 ? e2 * (n2 -= 2.25 / t2) * n2 + 0.9375 : e2 * (n2 -= 2.625 / t2) * n2 + 0.984375;
  }
  void 0 !== n.easing && (n.easing.jswing = n.easing.swing);
  var t = Math.pow, u = Math.sqrt, r = Math.sin, i = Math.cos, a = Math.PI, c = 1.70158, o = 1.525 * c, s = 2 * a / 3, f = 2 * a / 4.5;
  n.extend(n.easing, { def: "easeOutQuad", swing: function(e2) {
    return n.easing[n.easing.def](e2);
  }, easeInQuad: function(n2) {
    return n2 * n2;
  }, easeOutQuad: function(n2) {
    return 1 - (1 - n2) * (1 - n2);
  }, easeInOutQuad: function(n2) {
    return n2 < 0.5 ? 2 * n2 * n2 : 1 - t(-2 * n2 + 2, 2) / 2;
  }, easeInCubic: function(n2) {
    return n2 * n2 * n2;
  }, easeOutCubic: function(n2) {
    return 1 - t(1 - n2, 3);
  }, easeInOutCubic: function(n2) {
    return n2 < 0.5 ? 4 * n2 * n2 * n2 : 1 - t(-2 * n2 + 2, 3) / 2;
  }, easeInQuart: function(n2) {
    return n2 * n2 * n2 * n2;
  }, easeOutQuart: function(n2) {
    return 1 - t(1 - n2, 4);
  }, easeInOutQuart: function(n2) {
    return n2 < 0.5 ? 8 * n2 * n2 * n2 * n2 : 1 - t(-2 * n2 + 2, 4) / 2;
  }, easeInQuint: function(n2) {
    return n2 * n2 * n2 * n2 * n2;
  }, easeOutQuint: function(n2) {
    return 1 - t(1 - n2, 5);
  }, easeInOutQuint: function(n2) {
    return n2 < 0.5 ? 16 * n2 * n2 * n2 * n2 * n2 : 1 - t(-2 * n2 + 2, 5) / 2;
  }, easeInSine: function(n2) {
    return 1 - i(n2 * a / 2);
  }, easeOutSine: function(n2) {
    return r(n2 * a / 2);
  }, easeInOutSine: function(n2) {
    return -(i(a * n2) - 1) / 2;
  }, easeInExpo: function(n2) {
    return 0 === n2 ? 0 : t(2, 10 * n2 - 10);
  }, easeOutExpo: function(n2) {
    return 1 === n2 ? 1 : 1 - t(2, -10 * n2);
  }, easeInOutExpo: function(n2) {
    return 0 === n2 ? 0 : 1 === n2 ? 1 : n2 < 0.5 ? t(2, 20 * n2 - 10) / 2 : (2 - t(2, -20 * n2 + 10)) / 2;
  }, easeInCirc: function(n2) {
    return 1 - u(1 - t(n2, 2));
  }, easeOutCirc: function(n2) {
    return u(1 - t(n2 - 1, 2));
  }, easeInOutCirc: function(n2) {
    return n2 < 0.5 ? (1 - u(1 - t(2 * n2, 2))) / 2 : (u(1 - t(-2 * n2 + 2, 2)) + 1) / 2;
  }, easeInElastic: function(n2) {
    return 0 === n2 ? 0 : 1 === n2 ? 1 : -t(2, 10 * n2 - 10) * r((10 * n2 - 10.75) * s);
  }, easeOutElastic: function(n2) {
    return 0 === n2 ? 0 : 1 === n2 ? 1 : t(2, -10 * n2) * r((10 * n2 - 0.75) * s) + 1;
  }, easeInOutElastic: function(n2) {
    return 0 === n2 ? 0 : 1 === n2 ? 1 : n2 < 0.5 ? -(t(2, 20 * n2 - 10) * r((20 * n2 - 11.125) * f)) / 2 : t(2, -20 * n2 + 10) * r((20 * n2 - 11.125) * f) / 2 + 1;
  }, easeInBack: function(n2) {
    return (c + 1) * n2 * n2 * n2 - c * n2 * n2;
  }, easeOutBack: function(n2) {
    return 1 + (c + 1) * t(n2 - 1, 3) + c * t(n2 - 1, 2);
  }, easeInOutBack: function(n2) {
    return n2 < 0.5 ? t(2 * n2, 2) * (7.189819 * n2 - o) / 2 : (t(2 * n2 - 2, 2) * ((o + 1) * (2 * n2 - 2) + o) + 2) / 2;
  }, easeInBounce: function(n2) {
    return 1 - e(1 - n2);
  }, easeOutBounce: e, easeInOutBounce: function(n2) {
    return n2 < 0.5 ? (1 - e(1 - 2 * n2)) / 2 : (1 + e(2 * n2 - 1)) / 2;
  } });
});
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function() {
  "use strict";
  function t(o) {
    if (!o)
      throw new Error("No options passed to Waypoint constructor");
    if (!o.element)
      throw new Error("No element option passed to Waypoint constructor");
    if (!o.handler)
      throw new Error("No handler option passed to Waypoint constructor");
    this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({ name: this.options.group, axis: this.axis }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1;
  }
  var e = 0, i = {};
  t.prototype.queueTrigger = function(t2) {
    this.group.queueTrigger(this, t2);
  }, t.prototype.trigger = function(t2) {
    this.enabled && this.callback && this.callback.apply(this, t2);
  }, t.prototype.destroy = function() {
    this.context.remove(this), this.group.remove(this), delete i[this.key];
  }, t.prototype.disable = function() {
    return this.enabled = false, this;
  }, t.prototype.enable = function() {
    return this.context.refresh(), this.enabled = true, this;
  }, t.prototype.next = function() {
    return this.group.next(this);
  }, t.prototype.previous = function() {
    return this.group.previous(this);
  }, t.invokeAll = function(t2) {
    var e2 = [];
    for (var o in i)
      e2.push(i[o]);
    for (var n = 0, r = e2.length; r > n; n++)
      e2[n][t2]();
  }, t.destroyAll = function() {
    t.invokeAll("destroy");
  }, t.disableAll = function() {
    t.invokeAll("disable");
  }, t.enableAll = function() {
    t.Context.refreshAll();
    for (var e2 in i)
      i[e2].enabled = true;
    return this;
  }, t.refreshAll = function() {
    t.Context.refreshAll();
  }, t.viewportHeight = function() {
    return window.innerHeight || document.documentElement.clientHeight;
  }, t.viewportWidth = function() {
    return document.documentElement.clientWidth;
  }, t.adapters = [], t.defaults = { context: window, continuous: true, enabled: true, group: "default", horizontal: false, offset: 0 }, t.offsetAliases = { "bottom-in-view": function() {
    return this.context.innerHeight() - this.adapter.outerHeight();
  }, "right-in-view": function() {
    return this.context.innerWidth() - this.adapter.outerWidth();
  } }, window.Waypoint = t;
}(), function() {
  "use strict";
  function t(t2) {
    window.setTimeout(t2, 1e3 / 60);
  }
  function e(t2) {
    this.element = t2, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t2), this.key = "waypoint-context-" + i, this.didScroll = false, this.didResize = false, this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }, this.waypoints = { vertical: {}, horizontal: {} }, t2.waypointContextKey = this.key, o[t2.waypointContextKey] = this, i += 1, n.windowContext || (n.windowContext = true, n.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler();
  }
  var i = 0, o = {}, n = window.Waypoint, r = window.onload;
  e.prototype.add = function(t2) {
    var e2 = t2.options.horizontal ? "horizontal" : "vertical";
    this.waypoints[e2][t2.key] = t2, this.refresh();
  }, e.prototype.checkEmpty = function() {
    var t2 = this.Adapter.isEmptyObject(this.waypoints.horizontal), e2 = this.Adapter.isEmptyObject(this.waypoints.vertical), i2 = this.element == this.element.window;
    t2 && e2 && !i2 && (this.adapter.off(".waypoints"), delete o[this.key]);
  }, e.prototype.createThrottledResizeHandler = function() {
    function t2() {
      e2.handleResize(), e2.didResize = false;
    }
    var e2 = this;
    this.adapter.on("resize.waypoints", function() {
      e2.didResize || (e2.didResize = true, n.requestAnimationFrame(t2));
    });
  }, e.prototype.createThrottledScrollHandler = function() {
    function t2() {
      e2.handleScroll(), e2.didScroll = false;
    }
    var e2 = this;
    this.adapter.on("scroll.waypoints", function() {
      (!e2.didScroll || n.isTouch) && (e2.didScroll = true, n.requestAnimationFrame(t2));
    });
  }, e.prototype.handleResize = function() {
    n.Context.refreshAll();
  }, e.prototype.handleScroll = function() {
    var t2 = {}, e2 = { horizontal: { newScroll: this.adapter.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" }, vertical: { newScroll: this.adapter.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" } };
    for (var i2 in e2) {
      var o2 = e2[i2], n2 = o2.newScroll > o2.oldScroll, r2 = n2 ? o2.forward : o2.backward;
      for (var s in this.waypoints[i2]) {
        var a = this.waypoints[i2][s];
        if (null !== a.triggerPoint) {
          var l = o2.oldScroll < a.triggerPoint, h = o2.newScroll >= a.triggerPoint, p = l && h, u = !l && !h;
          (p || u) && (a.queueTrigger(r2), t2[a.group.id] = a.group);
        }
      }
    }
    for (var c in t2)
      t2[c].flushTriggers();
    this.oldScroll = { x: e2.horizontal.newScroll, y: e2.vertical.newScroll };
  }, e.prototype.innerHeight = function() {
    return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight();
  }, e.prototype.remove = function(t2) {
    delete this.waypoints[t2.axis][t2.key], this.checkEmpty();
  }, e.prototype.innerWidth = function() {
    return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth();
  }, e.prototype.destroy = function() {
    var t2 = [];
    for (var e2 in this.waypoints)
      for (var i2 in this.waypoints[e2])
        t2.push(this.waypoints[e2][i2]);
    for (var o2 = 0, n2 = t2.length; n2 > o2; o2++)
      t2[o2].destroy();
  }, e.prototype.refresh = function() {
    var t2, e2 = this.element == this.element.window, i2 = e2 ? void 0 : this.adapter.offset(), o2 = {};
    this.handleScroll(), t2 = { horizontal: { contextOffset: e2 ? 0 : i2.left, contextScroll: e2 ? 0 : this.oldScroll.x, contextDimension: this.innerWidth(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" }, vertical: { contextOffset: e2 ? 0 : i2.top, contextScroll: e2 ? 0 : this.oldScroll.y, contextDimension: this.innerHeight(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" } };
    for (var r2 in t2) {
      var s = t2[r2];
      for (var a in this.waypoints[r2]) {
        var l, h, p, u, c, d = this.waypoints[r2][a], f = d.options.offset, w = d.triggerPoint, y = 0, g = null == w;
        d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = Math.floor(y + l - f), h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o2[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o2[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o2[d.group.id] = d.group);
      }
    }
    return n.requestAnimationFrame(function() {
      for (var t3 in o2)
        o2[t3].flushTriggers();
    }), this;
  }, e.findOrCreateByElement = function(t2) {
    return e.findByElement(t2) || new e(t2);
  }, e.refreshAll = function() {
    for (var t2 in o)
      o[t2].refresh();
  }, e.findByElement = function(t2) {
    return o[t2.waypointContextKey];
  }, window.onload = function() {
    r && r(), e.refreshAll();
  }, n.requestAnimationFrame = function(e2) {
    var i2 = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
    i2.call(window, e2);
  }, n.Context = e;
}(), function() {
  "use strict";
  function t(t2, e2) {
    return t2.triggerPoint - e2.triggerPoint;
  }
  function e(t2, e2) {
    return e2.triggerPoint - t2.triggerPoint;
  }
  function i(t2) {
    this.name = t2.name, this.axis = t2.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this;
  }
  var o = { vertical: {}, horizontal: {} }, n = window.Waypoint;
  i.prototype.add = function(t2) {
    this.waypoints.push(t2);
  }, i.prototype.clearTriggerQueues = function() {
    this.triggerQueues = { up: [], down: [], left: [], right: [] };
  }, i.prototype.flushTriggers = function() {
    for (var i2 in this.triggerQueues) {
      var o2 = this.triggerQueues[i2], n2 = "up" === i2 || "left" === i2;
      o2.sort(n2 ? e : t);
      for (var r = 0, s = o2.length; s > r; r += 1) {
        var a = o2[r];
        (a.options.continuous || r === o2.length - 1) && a.trigger([i2]);
      }
    }
    this.clearTriggerQueues();
  }, i.prototype.next = function(e2) {
    this.waypoints.sort(t);
    var i2 = n.Adapter.inArray(e2, this.waypoints), o2 = i2 === this.waypoints.length - 1;
    return o2 ? null : this.waypoints[i2 + 1];
  }, i.prototype.previous = function(e2) {
    this.waypoints.sort(t);
    var i2 = n.Adapter.inArray(e2, this.waypoints);
    return i2 ? this.waypoints[i2 - 1] : null;
  }, i.prototype.queueTrigger = function(t2, e2) {
    this.triggerQueues[e2].push(t2);
  }, i.prototype.remove = function(t2) {
    var e2 = n.Adapter.inArray(t2, this.waypoints);
    e2 > -1 && this.waypoints.splice(e2, 1);
  }, i.prototype.first = function() {
    return this.waypoints[0];
  }, i.prototype.last = function() {
    return this.waypoints[this.waypoints.length - 1];
  }, i.findOrCreate = function(t2) {
    return o[t2.axis][t2.name] || new i(t2);
  }, n.Group = i;
}(), function() {
  "use strict";
  function t(t2) {
    this.$element = e(t2);
  }
  var e = window.jQuery, i = window.Waypoint;
  e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e2, i2) {
    t.prototype[i2] = function() {
      var t2 = Array.prototype.slice.call(arguments);
      return this.$element[i2].apply(this.$element, t2);
    };
  }), e.each(["extend", "inArray", "isEmptyObject"], function(i2, o) {
    t[o] = e[o];
  }), i.adapters.push({ name: "jquery", Adapter: t }), i.Adapter = t;
}(), function() {
  "use strict";
  function t(t2) {
    return function() {
      var i = [], o = arguments[0];
      return t2.isFunction(arguments[0]) && (o = t2.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function() {
        var n = t2.extend({}, o, { element: this });
        "string" == typeof n.context && (n.context = t2(this).closest(n.context)[0]), i.push(new e(n));
      }), i;
    };
  }
  var e = window.Waypoint;
  window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
}();
/*!
 * Lightbox v2.11.4
 * by Lokesh Dhakar
 *
 * More info:
 * http://lokeshdhakar.com/projects/lightbox2/
 *
 * Copyright Lokesh Dhakar
 * Released under the MIT license
 * https://github.com/lokesh/lightbox2/blob/master/LICENSE
 *
 * @preserve
 */
!function(a, b) {
  "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? module.exports = b(require("jquery")) : a.lightbox = b(a.jQuery);
}(this, function(a) {
  function b(b2) {
    this.album = [], this.currentImageIndex = void 0, this.init(), this.options = a.extend({}, this.constructor.defaults), this.option(b2);
  }
  return b.defaults = { albumLabel: "Image %1 of %2", alwaysShowNavOnTouchDevices: false, fadeDuration: 600, fitImagesInViewport: true, imageFadeDuration: 600, positionFromTop: 50, resizeDuration: 700, showImageNumberLabel: true, wrapAround: false, disableScrolling: false, sanitizeTitle: false }, b.prototype.option = function(b2) {
    a.extend(this.options, b2);
  }, b.prototype.imageCountLabel = function(a2, b2) {
    return this.options.albumLabel.replace(/%1/g, a2).replace(/%2/g, b2);
  }, b.prototype.init = function() {
    var b2 = this;
    a(document).ready(function() {
      b2.enable(), b2.build();
    });
  }, b.prototype.enable = function() {
    var b2 = this;
    a("body").on("click", "a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]", function(c) {
      return b2.start(a(c.currentTarget)), false;
    });
  }, b.prototype.build = function() {
    if (!(a("#lightbox").length > 0)) {
      var b2 = this;
      a('<div id="lightboxOverlay" tabindex="-1" class="lightboxOverlay"></div><div id="lightbox" tabindex="-1" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt=""/><div class="lb-nav"><a class="lb-prev" role="button" tabindex="0" aria-label="Previous image" href="" ></a><a class="lb-next" role="button" tabindex="0" aria-label="Next image" href="" ></a></div><div class="lb-loader"><a class="lb-cancel" role="button" tabindex="0"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close" role="button" tabindex="0"></a></div></div></div></div>').appendTo(a("body")), this.$lightbox = a("#lightbox"), this.$overlay = a("#lightboxOverlay"), this.$outerContainer = this.$lightbox.find(".lb-outerContainer"), this.$container = this.$lightbox.find(".lb-container"), this.$image = this.$lightbox.find(".lb-image"), this.$nav = this.$lightbox.find(".lb-nav"), this.containerPadding = { top: parseInt(this.$container.css("padding-top"), 10), right: parseInt(this.$container.css("padding-right"), 10), bottom: parseInt(this.$container.css("padding-bottom"), 10), left: parseInt(this.$container.css("padding-left"), 10) }, this.imageBorderWidth = { top: parseInt(this.$image.css("border-top-width"), 10), right: parseInt(this.$image.css("border-right-width"), 10), bottom: parseInt(this.$image.css("border-bottom-width"), 10), left: parseInt(this.$image.css("border-left-width"), 10) }, this.$overlay.hide().on("click", function() {
        return b2.end(), false;
      }), this.$lightbox.hide().on("click", function(c) {
        "lightbox" === a(c.target).attr("id") && b2.end();
      }), this.$outerContainer.on("click", function(c) {
        return "lightbox" === a(c.target).attr("id") && b2.end(), false;
      }), this.$lightbox.find(".lb-prev").on("click", function() {
        return 0 === b2.currentImageIndex ? b2.changeImage(b2.album.length - 1) : b2.changeImage(b2.currentImageIndex - 1), false;
      }), this.$lightbox.find(".lb-next").on("click", function() {
        return b2.currentImageIndex === b2.album.length - 1 ? b2.changeImage(0) : b2.changeImage(b2.currentImageIndex + 1), false;
      }), this.$nav.on("mousedown", function(a2) {
        3 === a2.which && (b2.$nav.css("pointer-events", "none"), b2.$lightbox.one("contextmenu", function() {
          setTimeout((function() {
            this.$nav.css("pointer-events", "auto");
          }).bind(b2), 0);
        }));
      }), this.$lightbox.find(".lb-loader, .lb-close").on("click keyup", function(a2) {
        if ("click" === a2.type || "keyup" === a2.type && (13 === a2.which || 32 === a2.which))
          return b2.end(), false;
      });
    }
  }, b.prototype.start = function(b2) {
    function c(a2) {
      d.album.push({ alt: a2.attr("data-alt"), link: a2.attr("href"), title: a2.attr("data-title") || a2.attr("title") });
    }
    var d = this, e = a(window);
    e.on("resize", a.proxy(this.sizeOverlay, this)), this.sizeOverlay(), this.album = [];
    var f, g = 0, h = b2.attr("data-lightbox");
    if (h) {
      f = a(b2.prop("tagName") + '[data-lightbox="' + h + '"]');
      for (var i = 0; i < f.length; i = ++i)
        c(a(f[i])), f[i] === b2[0] && (g = i);
    } else if ("lightbox" === b2.attr("rel"))
      c(b2);
    else {
      f = a(b2.prop("tagName") + '[rel="' + b2.attr("rel") + '"]');
      for (var j = 0; j < f.length; j = ++j)
        c(a(f[j])), f[j] === b2[0] && (g = j);
    }
    var k = e.scrollTop() + this.options.positionFromTop, l = e.scrollLeft();
    this.$lightbox.css({ top: k + "px", left: l + "px" }).fadeIn(this.options.fadeDuration), this.options.disableScrolling && a("body").addClass("lb-disable-scrolling"), this.changeImage(g);
  }, b.prototype.changeImage = function(b2) {
    var c = this, d = this.album[b2].link, e = d.split(".").slice(-1)[0], f = this.$lightbox.find(".lb-image");
    this.disableKeyboardNav(), this.$overlay.fadeIn(this.options.fadeDuration), a(".lb-loader").fadeIn("slow"), this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(), this.$outerContainer.addClass("animating");
    var g = new Image();
    g.onload = function() {
      var h, i, j, k, l, m;
      f.attr({ alt: c.album[b2].alt, src: d }), a(g), f.width(g.width), f.height(g.height);
      var n = g.width / g.height;
      m = a(window).width(), l = a(window).height(), k = m - c.containerPadding.left - c.containerPadding.right - c.imageBorderWidth.left - c.imageBorderWidth.right - 20, j = l - c.containerPadding.top - c.containerPadding.bottom - c.imageBorderWidth.top - c.imageBorderWidth.bottom - c.options.positionFromTop - 70, "svg" === e ? (n >= 1 ? (i = k, h = parseInt(k / n, 10)) : (i = parseInt(j / n, 10), h = j), f.width(i), f.height(h)) : (c.options.fitImagesInViewport ? (c.options.maxWidth && c.options.maxWidth < k && (k = c.options.maxWidth), c.options.maxHeight && c.options.maxHeight < j && (j = c.options.maxHeight)) : (k = c.options.maxWidth || g.width || k, j = c.options.maxHeight || g.height || j), (g.width > k || g.height > j) && (g.width / k > g.height / j ? (i = k, h = parseInt(g.height / (g.width / i), 10), f.width(i), f.height(h)) : (h = j, i = parseInt(g.width / (g.height / h), 10), f.width(i), f.height(h)))), c.sizeContainer(f.width(), f.height());
    }, g.src = this.album[b2].link, this.currentImageIndex = b2;
  }, b.prototype.sizeOverlay = function() {
    var b2 = this;
    setTimeout(function() {
      b2.$overlay.width(a(document).width()).height(a(document).height());
    }, 0);
  }, b.prototype.sizeContainer = function(a2, b2) {
    function c() {
      d.$lightbox.find(".lb-dataContainer").width(g), d.$lightbox.find(".lb-prevLink").height(h), d.$lightbox.find(".lb-nextLink").height(h), d.$overlay.trigger("focus"), d.showImage();
    }
    var d = this, e = this.$outerContainer.outerWidth(), f = this.$outerContainer.outerHeight(), g = a2 + this.containerPadding.left + this.containerPadding.right + this.imageBorderWidth.left + this.imageBorderWidth.right, h = b2 + this.containerPadding.top + this.containerPadding.bottom + this.imageBorderWidth.top + this.imageBorderWidth.bottom;
    e !== g || f !== h ? this.$outerContainer.animate({ width: g, height: h }, this.options.resizeDuration, "swing", function() {
      c();
    }) : c();
  }, b.prototype.showImage = function() {
    this.$lightbox.find(".lb-loader").stop(true).hide(), this.$lightbox.find(".lb-image").fadeIn(this.options.imageFadeDuration), this.updateNav(), this.updateDetails(), this.preloadNeighboringImages(), this.enableKeyboardNav();
  }, b.prototype.updateNav = function() {
    var a2 = false;
    try {
      document.createEvent("TouchEvent"), a2 = !!this.options.alwaysShowNavOnTouchDevices;
    } catch (a3) {
    }
    this.$lightbox.find(".lb-nav").show(), this.album.length > 1 && (this.options.wrapAround ? (a2 && this.$lightbox.find(".lb-prev, .lb-next").css("opacity", "1"), this.$lightbox.find(".lb-prev, .lb-next").show()) : (this.currentImageIndex > 0 && (this.$lightbox.find(".lb-prev").show(), a2 && this.$lightbox.find(".lb-prev").css("opacity", "1")), this.currentImageIndex < this.album.length - 1 && (this.$lightbox.find(".lb-next").show(), a2 && this.$lightbox.find(".lb-next").css("opacity", "1"))));
  }, b.prototype.updateDetails = function() {
    var a2 = this;
    if (void 0 !== this.album[this.currentImageIndex].title && "" !== this.album[this.currentImageIndex].title) {
      var b2 = this.$lightbox.find(".lb-caption");
      this.options.sanitizeTitle ? b2.text(this.album[this.currentImageIndex].title) : b2.html(this.album[this.currentImageIndex].title), b2.fadeIn("fast");
    }
    if (this.album.length > 1 && this.options.showImageNumberLabel) {
      var c = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
      this.$lightbox.find(".lb-number").text(c).fadeIn("fast");
    } else
      this.$lightbox.find(".lb-number").hide();
    this.$outerContainer.removeClass("animating"), this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration, function() {
      return a2.sizeOverlay();
    });
  }, b.prototype.preloadNeighboringImages = function() {
    if (this.album.length > this.currentImageIndex + 1) {
      new Image().src = this.album[this.currentImageIndex + 1].link;
    }
    if (this.currentImageIndex > 0) {
      new Image().src = this.album[this.currentImageIndex - 1].link;
    }
  }, b.prototype.enableKeyboardNav = function() {
    this.$lightbox.on("keyup.keyboard", a.proxy(this.keyboardAction, this)), this.$overlay.on("keyup.keyboard", a.proxy(this.keyboardAction, this));
  }, b.prototype.disableKeyboardNav = function() {
    this.$lightbox.off(".keyboard"), this.$overlay.off(".keyboard");
  }, b.prototype.keyboardAction = function(a2) {
    var b2 = a2.keyCode;
    27 === b2 ? (a2.stopPropagation(), this.end()) : 37 === b2 ? 0 !== this.currentImageIndex ? this.changeImage(this.currentImageIndex - 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(this.album.length - 1) : 39 === b2 && (this.currentImageIndex !== this.album.length - 1 ? this.changeImage(this.currentImageIndex + 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(0));
  }, b.prototype.end = function() {
    this.disableKeyboardNav(), a(window).off("resize", this.sizeOverlay), this.$lightbox.fadeOut(this.options.fadeDuration), this.$overlay.fadeOut(this.options.fadeDuration), this.options.disableScrolling && a("body").removeClass("lb-disable-scrolling");
  }, new b();
});
!function(a, b, c, d) {
  function e(b2, c2) {
    this.settings = null, this.options = a.extend({}, e.Defaults, c2), this.$element = a(b2), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }, this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }, a.each(["onResize", "onThrottledResize"], a.proxy(function(b3, c3) {
      this._handlers[c3] = a.proxy(this[c3], this);
    }, this)), a.each(e.Plugins, a.proxy(function(a2, b3) {
      this._plugins[a2.charAt(0).toLowerCase() + a2.slice(1)] = new b3(this);
    }, this)), a.each(e.Workers, a.proxy(function(b3, c3) {
      this._pipe.push({ filter: c3.filter, run: a.proxy(c3.run, this) });
    }, this)), this.setup(), this.initialize();
  }
  e.Defaults = { items: 3, loop: false, center: false, rewind: false, mouseDrag: true, touchDrag: true, pullDrag: true, freeDrag: false, margin: 0, stagePadding: 0, merge: false, mergeFit: true, autoWidth: false, startPosition: 0, rtl: false, smartSpeed: 250, fluidSpeed: false, dragEndSpeed: false, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: b, fallbackEasing: "swing", info: false, nestedItemSelector: false, itemElement: "div", stageElement: "div", refreshClass: "owl-refresh", loadedClass: "owl-loaded", loadingClass: "owl-loading", rtlClass: "owl-rtl", responsiveClass: "owl-responsive", dragClass: "owl-drag", itemClass: "owl-item", stageClass: "owl-stage", stageOuterClass: "owl-stage-outer", grabClass: "owl-grab" }, e.Width = { Default: "default", Inner: "inner", Outer: "outer" }, e.Type = { Event: "event", State: "state" }, e.Plugins = {}, e.Workers = [{ filter: ["width", "settings"], run: function() {
    this._width = this.$element.width();
  } }, { filter: ["width", "items", "settings"], run: function(a2) {
    a2.current = this._items && this._items[this.relative(this._current)];
  } }, { filter: ["items", "settings"], run: function() {
    this.$stage.children(".cloned").remove();
  } }, { filter: ["width", "items", "settings"], run: function(a2) {
    var b2 = this.settings.margin || "", c2 = !this.settings.autoWidth, d2 = this.settings.rtl, e2 = { width: "auto", "margin-left": d2 ? b2 : "", "margin-right": d2 ? "" : b2 };
    !c2 && this.$stage.children().css(e2), a2.css = e2;
  } }, { filter: ["width", "items", "settings"], run: function(a2) {
    var b2 = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, c2 = null, d2 = this._items.length, e2 = !this.settings.autoWidth, f = [];
    for (a2.items = { merge: false, width: b2 }; d2--; )
      c2 = this._mergers[d2], c2 = this.settings.mergeFit && Math.min(c2, this.settings.items) || c2, a2.items.merge = c2 > 1 || a2.items.merge, f[d2] = e2 ? b2 * c2 : this._items[d2].width();
    this._widths = f;
  } }, { filter: ["items", "settings"], run: function() {
    var b2 = [], c2 = this._items, d2 = this.settings, e2 = Math.max(2 * d2.items, 4), f = 2 * Math.ceil(c2.length / 2), g = d2.loop && c2.length ? d2.rewind ? e2 : Math.max(e2, f) : 0, h = "", i = "";
    for (g /= 2; g--; )
      b2.push(this.normalize(b2.length / 2, true)), h += c2[b2[b2.length - 1]][0].outerHTML, b2.push(this.normalize(c2.length - 1 - (b2.length - 1) / 2, true)), i = c2[b2[b2.length - 1]][0].outerHTML + i;
    this._clones = b2, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage);
  } }, { filter: ["width", "items", "settings"], run: function() {
    for (var a2 = this.settings.rtl ? 1 : -1, b2 = this._clones.length + this._items.length, c2 = -1, d2 = 0, e2 = 0, f = []; ++c2 < b2; )
      d2 = f[c2 - 1] || 0, e2 = this._widths[this.relative(c2)] + this.settings.margin, f.push(d2 + e2 * a2);
    this._coordinates = f;
  } }, { filter: ["width", "items", "settings"], run: function() {
    var a2 = this.settings.stagePadding, b2 = this._coordinates, c2 = { width: Math.ceil(Math.abs(b2[b2.length - 1])) + 2 * a2, "padding-left": a2 || "", "padding-right": a2 || "" };
    this.$stage.css(c2);
  } }, { filter: ["width", "items", "settings"], run: function(a2) {
    var b2 = this._coordinates.length, c2 = !this.settings.autoWidth, d2 = this.$stage.children();
    if (c2 && a2.items.merge)
      for (; b2--; )
        a2.css.width = this._widths[this.relative(b2)], d2.eq(b2).css(a2.css);
    else
      c2 && (a2.css.width = a2.items.width, d2.css(a2.css));
  } }, { filter: ["items"], run: function() {
    this._coordinates.length < 1 && this.$stage.removeAttr("style");
  } }, { filter: ["width", "items", "settings"], run: function(a2) {
    a2.current = a2.current ? this.$stage.children().index(a2.current) : 0, a2.current = Math.max(this.minimum(), Math.min(this.maximum(), a2.current)), this.reset(a2.current);
  } }, { filter: ["position"], run: function() {
    this.animate(this.coordinates(this._current));
  } }, { filter: ["width", "position", "items", "settings"], run: function() {
    var a2, b2, c2, d2, e2 = this.settings.rtl ? 1 : -1, f = 2 * this.settings.stagePadding, g = this.coordinates(this.current()) + f, h = g + this.width() * e2, i = [];
    for (c2 = 0, d2 = this._coordinates.length; c2 < d2; c2++)
      a2 = this._coordinates[c2 - 1] || 0, b2 = Math.abs(this._coordinates[c2]) + f * e2, (this.op(a2, "<=", g) && this.op(a2, ">", h) || this.op(b2, "<", g) && this.op(b2, ">", h)) && i.push(c2);
    this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"));
  } }], e.prototype.initialize = function() {
    if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
      var b2, c2, e2;
      b2 = this.$element.find("img"), c2 = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e2 = this.$element.children(c2).width(), b2.length && e2 <= 0 && this.preloadAutoWidthImages(b2);
    }
    this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized");
  }, e.prototype.setup = function() {
    var b2 = this.viewport(), c2 = this.options.responsive, d2 = -1, e2 = null;
    c2 ? (a.each(c2, function(a2) {
      a2 <= b2 && a2 > d2 && (d2 = Number(a2));
    }), e2 = a.extend({}, this.options, c2[d2]), "function" == typeof e2.stagePadding && (e2.stagePadding = e2.stagePadding()), delete e2.responsive, e2.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d2))) : e2 = a.extend({}, this.options), this.trigger("change", { property: { name: "settings", value: e2 } }), this._breakpoint = d2, this.settings = e2, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } });
  }, e.prototype.optionsLogic = function() {
    this.settings.autoWidth && (this.settings.stagePadding = false, this.settings.merge = false);
  }, e.prototype.prepare = function(b2) {
    var c2 = this.trigger("prepare", { content: b2 });
    return c2.data || (c2.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b2)), this.trigger("prepared", { content: c2.data }), c2.data;
  }, e.prototype.update = function() {
    for (var b2 = 0, c2 = this._pipe.length, d2 = a.proxy(function(a2) {
      return this[a2];
    }, this._invalidated), e2 = {}; b2 < c2; )
      (this._invalidated.all || a.grep(this._pipe[b2].filter, d2).length > 0) && this._pipe[b2].run(e2), b2++;
    this._invalidated = {}, !this.is("valid") && this.enter("valid");
  }, e.prototype.width = function(a2) {
    switch (a2 = a2 || e.Width.Default) {
      case e.Width.Inner:
      case e.Width.Outer:
        return this._width;
      default:
        return this._width - 2 * this.settings.stagePadding + this.settings.margin;
    }
  }, e.prototype.refresh = function() {
    this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed");
  }, e.prototype.onThrottledResize = function() {
    b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
  }, e.prototype.onResize = function() {
    return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), false) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))));
  }, e.prototype.registerEventHandlers = function() {
    a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== false && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
      return false;
    })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)));
  }, e.prototype.onDragStart = function(b2) {
    var d2 = null;
    3 !== b2.which && (a.support.transform ? (d2 = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d2 = { x: d2[16 === d2.length ? 12 : 4], y: d2[16 === d2.length ? 13 : 5] }) : (d2 = this.$stage.position(), d2 = { x: this.settings.rtl ? d2.left + this.$stage.width() - this.width() + this.settings.margin : d2.left, y: d2.top }), this.is("animating") && (a.support.transform ? this.animate(d2.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b2.type), this.speed(0), this._drag.time = (/* @__PURE__ */ new Date()).getTime(), this._drag.target = a(b2.target), this._drag.stage.start = d2, this._drag.stage.current = d2, this._drag.pointer = this.pointer(b2), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b3) {
      var d3 = this.difference(this._drag.pointer, this.pointer(b3));
      a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d3.x) < Math.abs(d3.y) && this.is("valid") || (b3.preventDefault(), this.enter("dragging"), this.trigger("drag"));
    }, this)));
  }, e.prototype.onDragMove = function(a2) {
    var b2 = null, c2 = null, d2 = null, e2 = this.difference(this._drag.pointer, this.pointer(a2)), f = this.difference(this._drag.stage.start, e2);
    this.is("dragging") && (a2.preventDefault(), this.settings.loop ? (b2 = this.coordinates(this.minimum()), c2 = this.coordinates(this.maximum() + 1) - b2, f.x = ((f.x - b2) % c2 + c2) % c2 + b2) : (b2 = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c2 = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d2 = this.settings.pullDrag ? -1 * e2.x / 5 : 0, f.x = Math.max(Math.min(f.x, b2 + d2), c2 + d2)), this._drag.stage.current = f, this.animate(f.x));
  }, e.prototype.onDragEnd = function(b2) {
    var d2 = this.difference(this._drag.pointer, this.pointer(b2)), e2 = this._drag.stage.current, f = d2.x > 0 ^ this.settings.rtl ? "left" : "right";
    a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d2.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e2.x, 0 !== d2.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d2.x) > 3 || (/* @__PURE__ */ new Date()).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
      return false;
    })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
  }, e.prototype.closest = function(b2, c2) {
    var d2 = -1, e2 = 30, f = this.width(), g = this.coordinates();
    return this.settings.freeDrag || a.each(g, a.proxy(function(a2, h) {
      return "left" === c2 && b2 > h - e2 && b2 < h + e2 ? d2 = a2 : "right" === c2 && b2 > h - f - e2 && b2 < h - f + e2 ? d2 = a2 + 1 : this.op(b2, "<", h) && this.op(b2, ">", g[a2 + 1] || h - f) && (d2 = "left" === c2 ? a2 + 1 : a2), d2 === -1;
    }, this)), this.settings.loop || (this.op(b2, ">", g[this.minimum()]) ? d2 = b2 = this.minimum() : this.op(b2, "<", g[this.maximum()]) && (d2 = b2 = this.maximum())), d2;
  }, e.prototype.animate = function(b2) {
    var c2 = this.speed() > 0;
    this.is("animating") && this.onTransitionEnd(), c2 && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({ transform: "translate3d(" + b2 + "px,0px,0px)", transition: this.speed() / 1e3 + "s" }) : c2 ? this.$stage.animate({ left: b2 + "px" }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({ left: b2 + "px" });
  }, e.prototype.is = function(a2) {
    return this._states.current[a2] && this._states.current[a2] > 0;
  }, e.prototype.current = function(a2) {
    if (a2 === d)
      return this._current;
    if (0 === this._items.length)
      return d;
    if (a2 = this.normalize(a2), this._current !== a2) {
      var b2 = this.trigger("change", { property: { name: "position", value: a2 } });
      b2.data !== d && (a2 = this.normalize(b2.data)), this._current = a2, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } });
    }
    return this._current;
  }, e.prototype.invalidate = function(b2) {
    return "string" === a.type(b2) && (this._invalidated[b2] = true, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function(a2, b3) {
      return b3;
    });
  }, e.prototype.reset = function(a2) {
    a2 = this.normalize(a2), a2 !== d && (this._speed = 0, this._current = a2, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a2)), this.release(["translate", "translated"]));
  }, e.prototype.normalize = function(a2, b2) {
    var c2 = this._items.length, e2 = b2 ? 0 : this._clones.length;
    return !this.isNumeric(a2) || c2 < 1 ? a2 = d : (a2 < 0 || a2 >= c2 + e2) && (a2 = ((a2 - e2 / 2) % c2 + c2) % c2 + e2 / 2), a2;
  }, e.prototype.relative = function(a2) {
    return a2 -= this._clones.length / 2, this.normalize(a2, true);
  }, e.prototype.maximum = function(a2) {
    var b2, c2, d2, e2 = this.settings, f = this._coordinates.length;
    if (e2.loop)
      f = this._clones.length / 2 + this._items.length - 1;
    else if (e2.autoWidth || e2.merge) {
      for (b2 = this._items.length, c2 = this._items[--b2].width(), d2 = this.$element.width(); b2-- && (c2 += this._items[b2].width() + this.settings.margin, !(c2 > d2)); )
        ;
      f = b2 + 1;
    } else
      f = e2.center ? this._items.length - 1 : this._items.length - e2.items;
    return a2 && (f -= this._clones.length / 2), Math.max(f, 0);
  }, e.prototype.minimum = function(a2) {
    return a2 ? 0 : this._clones.length / 2;
  }, e.prototype.items = function(a2) {
    return a2 === d ? this._items.slice() : (a2 = this.normalize(a2, true), this._items[a2]);
  }, e.prototype.mergers = function(a2) {
    return a2 === d ? this._mergers.slice() : (a2 = this.normalize(a2, true), this._mergers[a2]);
  }, e.prototype.clones = function(b2) {
    var c2 = this._clones.length / 2, e2 = c2 + this._items.length, f = function(a2) {
      return a2 % 2 === 0 ? e2 + a2 / 2 : c2 - (a2 + 1) / 2;
    };
    return b2 === d ? a.map(this._clones, function(a2, b3) {
      return f(b3);
    }) : a.map(this._clones, function(a2, c3) {
      return a2 === b2 ? f(c3) : null;
    });
  }, e.prototype.speed = function(a2) {
    return a2 !== d && (this._speed = a2), this._speed;
  }, e.prototype.coordinates = function(b2) {
    var c2, e2 = 1, f = b2 - 1;
    return b2 === d ? a.map(this._coordinates, a.proxy(function(a2, b3) {
      return this.coordinates(b3);
    }, this)) : (this.settings.center ? (this.settings.rtl && (e2 = -1, f = b2 + 1), c2 = this._coordinates[b2], c2 += (this.width() - c2 + (this._coordinates[f] || 0)) / 2 * e2) : c2 = this._coordinates[f] || 0, c2 = Math.ceil(c2));
  }, e.prototype.duration = function(a2, b2, c2) {
    return 0 === c2 ? 0 : Math.min(Math.max(Math.abs(b2 - a2), 1), 6) * Math.abs(c2 || this.settings.smartSpeed);
  }, e.prototype.to = function(a2, b2) {
    var c2 = this.current(), d2 = null, e2 = a2 - this.relative(c2), f = (e2 > 0) - (e2 < 0), g = this._items.length, h = this.minimum(), i = this.maximum();
    this.settings.loop ? (!this.settings.rewind && Math.abs(e2) > g / 2 && (e2 += f * -1 * g), a2 = c2 + e2, d2 = ((a2 - h) % g + g) % g + h, d2 !== a2 && d2 - e2 <= i && d2 - e2 > 0 && (c2 = d2 - e2, a2 = d2, this.reset(c2))) : this.settings.rewind ? (i += 1, a2 = (a2 % i + i) % i) : a2 = Math.max(h, Math.min(i, a2)), this.speed(this.duration(c2, a2, b2)), this.current(a2), this.$element.is(":visible") && this.update();
  }, e.prototype.next = function(a2) {
    a2 = a2 || false, this.to(this.relative(this.current()) + 1, a2);
  }, e.prototype.prev = function(a2) {
    a2 = a2 || false, this.to(this.relative(this.current()) - 1, a2);
  }, e.prototype.onTransitionEnd = function(a2) {
    if (a2 !== d && (a2.stopPropagation(), (a2.target || a2.srcElement || a2.originalTarget) !== this.$stage.get(0)))
      return false;
    this.leave("animating"), this.trigger("translated");
  }, e.prototype.viewport = function() {
    var d2;
    return this.options.responsiveBaseElement !== b ? d2 = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d2 = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d2 = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d2;
  }, e.prototype.replace = function(b2) {
    this.$stage.empty(), this._items = [], b2 && (b2 = b2 instanceof jQuery ? b2 : a(b2)), this.settings.nestedItemSelector && (b2 = b2.find("." + this.settings.nestedItemSelector)), b2.filter(function() {
      return 1 === this.nodeType;
    }).each(a.proxy(function(a2, b3) {
      b3 = this.prepare(b3), this.$stage.append(b3), this._items.push(b3), this._mergers.push(1 * b3.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
    }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items");
  }, e.prototype.add = function(b2, c2) {
    var e2 = this.relative(this._current);
    c2 = c2 === d ? this._items.length : this.normalize(c2, true), b2 = b2 instanceof jQuery ? b2 : a(b2), this.trigger("add", { content: b2, position: c2 }), b2 = this.prepare(b2), 0 === this._items.length || c2 === this._items.length ? (0 === this._items.length && this.$stage.append(b2), 0 !== this._items.length && this._items[c2 - 1].after(b2), this._items.push(b2), this._mergers.push(1 * b2.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c2].before(b2), this._items.splice(c2, 0, b2), this._mergers.splice(c2, 0, 1 * b2.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e2] && this.reset(this._items[e2].index()), this.invalidate("items"), this.trigger("added", { content: b2, position: c2 });
  }, e.prototype.remove = function(a2) {
    a2 = this.normalize(a2, true), a2 !== d && (this.trigger("remove", { content: this._items[a2], position: a2 }), this._items[a2].remove(), this._items.splice(a2, 1), this._mergers.splice(a2, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: a2 }));
  }, e.prototype.preloadAutoWidthImages = function(b2) {
    b2.each(a.proxy(function(b3, c2) {
      this.enter("pre-loading"), c2 = a(c2), a(new Image()).one("load", a.proxy(function(a2) {
        c2.attr("src", a2.target.src), c2.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
      }, this)).attr("src", c2.attr("src") || c2.attr("data-src") || c2.attr("data-src-retina"));
    }, this));
  }, e.prototype.destroy = function() {
    this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== false && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
    for (var d2 in this._plugins)
      this._plugins[d2].destroy();
    this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel");
  }, e.prototype.op = function(a2, b2, c2) {
    var d2 = this.settings.rtl;
    switch (b2) {
      case "<":
        return d2 ? a2 > c2 : a2 < c2;
      case ">":
        return d2 ? a2 < c2 : a2 > c2;
      case ">=":
        return d2 ? a2 <= c2 : a2 >= c2;
      case "<=":
        return d2 ? a2 >= c2 : a2 <= c2;
    }
  }, e.prototype.on = function(a2, b2, c2, d2) {
    a2.addEventListener ? a2.addEventListener(b2, c2, d2) : a2.attachEvent && a2.attachEvent("on" + b2, c2);
  }, e.prototype.off = function(a2, b2, c2, d2) {
    a2.removeEventListener ? a2.removeEventListener(b2, c2, d2) : a2.detachEvent && a2.detachEvent("on" + b2, c2);
  }, e.prototype.trigger = function(b2, c2, d2, f, g) {
    var h = { item: { count: this._items.length, index: this.current() } }, i = a.camelCase(a.grep(["on", b2, d2], function(a2) {
      return a2;
    }).join("-").toLowerCase()), j = a.Event([b2, "owl", d2 || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, h, c2));
    return this._supress[b2] || (a.each(this._plugins, function(a2, b3) {
      b3.onTrigger && b3.onTrigger(j);
    }), this.register({ type: e.Type.Event, name: b2 }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j;
  }, e.prototype.enter = function(b2) {
    a.each([b2].concat(this._states.tags[b2] || []), a.proxy(function(a2, b3) {
      this._states.current[b3] === d && (this._states.current[b3] = 0), this._states.current[b3]++;
    }, this));
  }, e.prototype.leave = function(b2) {
    a.each([b2].concat(this._states.tags[b2] || []), a.proxy(function(a2, b3) {
      this._states.current[b3]--;
    }, this));
  }, e.prototype.register = function(b2) {
    if (b2.type === e.Type.Event) {
      if (a.event.special[b2.name] || (a.event.special[b2.name] = {}), !a.event.special[b2.name].owl) {
        var c2 = a.event.special[b2.name]._default;
        a.event.special[b2.name]._default = function(a2) {
          return !c2 || !c2.apply || a2.namespace && a2.namespace.indexOf("owl") !== -1 ? a2.namespace && a2.namespace.indexOf("owl") > -1 : c2.apply(this, arguments);
        }, a.event.special[b2.name].owl = true;
      }
    } else
      b2.type === e.Type.State && (this._states.tags[b2.name] ? this._states.tags[b2.name] = this._states.tags[b2.name].concat(b2.tags) : this._states.tags[b2.name] = b2.tags, this._states.tags[b2.name] = a.grep(this._states.tags[b2.name], a.proxy(function(c3, d2) {
        return a.inArray(c3, this._states.tags[b2.name]) === d2;
      }, this)));
  }, e.prototype.suppress = function(b2) {
    a.each(b2, a.proxy(function(a2, b3) {
      this._supress[b3] = true;
    }, this));
  }, e.prototype.release = function(b2) {
    a.each(b2, a.proxy(function(a2, b3) {
      delete this._supress[b3];
    }, this));
  }, e.prototype.pointer = function(a2) {
    var c2 = { x: null, y: null };
    return a2 = a2.originalEvent || a2 || b.event, a2 = a2.touches && a2.touches.length ? a2.touches[0] : a2.changedTouches && a2.changedTouches.length ? a2.changedTouches[0] : a2, a2.pageX ? (c2.x = a2.pageX, c2.y = a2.pageY) : (c2.x = a2.clientX, c2.y = a2.clientY), c2;
  }, e.prototype.isNumeric = function(a2) {
    return !isNaN(parseFloat(a2));
  }, e.prototype.difference = function(a2, b2) {
    return { x: a2.x - b2.x, y: a2.y - b2.y };
  }, a.fn.owlCarousel = function(b2) {
    var c2 = Array.prototype.slice.call(arguments, 1);
    return this.each(function() {
      var d2 = a(this), f = d2.data("owl.carousel");
      f || (f = new e(this, "object" == typeof b2 && b2), d2.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b3, c3) {
        f.register({ type: e.Type.Event, name: c3 }), f.$element.on(c3 + ".owl.carousel.core", a.proxy(function(a2) {
          a2.namespace && a2.relatedTarget !== this && (this.suppress([c3]), f[c3].apply(this, [].slice.call(arguments, 1)), this.release([c3]));
        }, f));
      })), "string" == typeof b2 && "_" !== b2.charAt(0) && f[b2].apply(f, c2);
    });
  }, a.fn.owlCarousel.Constructor = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
  var e = function(b2) {
    this._core = b2, this._interval = null, this._visible = null, this._handlers = { "initialized.owl.carousel": a.proxy(function(a2) {
      a2.namespace && this._core.settings.autoRefresh && this.watch();
    }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
  };
  e.Defaults = { autoRefresh: true, autoRefreshInterval: 500 }, e.prototype.watch = function() {
    this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval));
  }, e.prototype.refresh = function() {
    this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
  }, e.prototype.destroy = function() {
    var a2, c2;
    b.clearInterval(this._interval);
    for (a2 in this._handlers)
      this._core.$element.off(a2, this._handlers[a2]);
    for (c2 in Object.getOwnPropertyNames(this))
      "function" != typeof this[c2] && (this[c2] = null);
  }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
  var e = function(b2) {
    this._core = b2, this._loaded = [], this._handlers = { "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b3) {
      if (b3.namespace && this._core.settings && this._core.settings.lazyLoad && (b3.property && "position" == b3.property.name || "initialized" == b3.type))
        for (var c2 = this._core.settings, e2 = c2.center && Math.ceil(c2.items / 2) || c2.items, f = c2.center && e2 * -1 || 0, g = (b3.property && b3.property.value !== d ? b3.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function(a2, b4) {
          this.load(b4);
        }, this); f++ < e2; )
          this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++;
    }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
  };
  e.Defaults = { lazyLoad: false }, e.prototype.load = function(c2) {
    var d2 = this._core.$stage.children().eq(c2), e2 = d2 && d2.find(".owl-lazy");
    !e2 || a.inArray(d2.get(0), this._loaded) > -1 || (e2.each(a.proxy(function(c3, d3) {
      var e3, f = a(d3), g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
      this._core.trigger("load", { element: f, url: g }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
        f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy");
      }, this)).attr("src", g) : (e3 = new Image(), e3.onload = a.proxy(function() {
        f.css({ "background-image": 'url("' + g + '")', opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy");
      }, this), e3.src = g);
    }, this)), this._loaded.push(d2.get(0)));
  }, e.prototype.destroy = function() {
    var a2, b2;
    for (a2 in this.handlers)
      this._core.$element.off(a2, this.handlers[a2]);
    for (b2 in Object.getOwnPropertyNames(this))
      "function" != typeof this[b2] && (this[b2] = null);
  }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
  var e = function(b2) {
    this._core = b2, this._handlers = { "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a2) {
      a2.namespace && this._core.settings.autoHeight && this.update();
    }, this), "changed.owl.carousel": a.proxy(function(a2) {
      a2.namespace && this._core.settings.autoHeight && "position" == a2.property.name && this.update();
    }, this), "loaded.owl.lazy": a.proxy(function(a2) {
      a2.namespace && this._core.settings.autoHeight && a2.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
    }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
  };
  e.Defaults = { autoHeight: false, autoHeightClass: "owl-height" }, e.prototype.update = function() {
    var b2 = this._core._current, c2 = b2 + this._core.settings.items, d2 = this._core.$stage.children().toArray().slice(b2, c2), e2 = [], f = 0;
    a.each(d2, function(b3, c3) {
      e2.push(a(c3).height());
    }), f = Math.max.apply(null, e2), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass);
  }, e.prototype.destroy = function() {
    var a2, b2;
    for (a2 in this._handlers)
      this._core.$element.off(a2, this._handlers[a2]);
    for (b2 in Object.getOwnPropertyNames(this))
      "function" != typeof this[b2] && (this[b2] = null);
  }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
  var e = function(b2) {
    this._core = b2, this._videos = {}, this._playing = null, this._handlers = { "initialized.owl.carousel": a.proxy(function(a2) {
      a2.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] });
    }, this), "resize.owl.carousel": a.proxy(function(a2) {
      a2.namespace && this._core.settings.video && this.isInFullScreen() && a2.preventDefault();
    }, this), "refreshed.owl.carousel": a.proxy(function(a2) {
      a2.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
    }, this), "changed.owl.carousel": a.proxy(function(a2) {
      a2.namespace && "position" === a2.property.name && this._playing && this.stop();
    }, this), "prepared.owl.carousel": a.proxy(function(b3) {
      if (b3.namespace) {
        var c2 = a(b3.content).find(".owl-video");
        c2.length && (c2.css("display", "none"), this.fetch(c2, a(b3.content)));
      }
    }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a2) {
      this.play(a2);
    }, this));
  };
  e.Defaults = { video: false, videoHeight: false, videoWidth: false }, e.prototype.fetch = function(a2, b2) {
    var c2 = function() {
      return a2.attr("data-vimeo-id") ? "vimeo" : a2.attr("data-vzaar-id") ? "vzaar" : "youtube";
    }(), d2 = a2.attr("data-vimeo-id") || a2.attr("data-youtube-id") || a2.attr("data-vzaar-id"), e2 = a2.attr("data-width") || this._core.settings.videoWidth, f = a2.attr("data-height") || this._core.settings.videoHeight, g = a2.attr("href");
    if (!g)
      throw new Error("Missing video URL.");
    if (d2 = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d2[3].indexOf("youtu") > -1)
      c2 = "youtube";
    else if (d2[3].indexOf("vimeo") > -1)
      c2 = "vimeo";
    else {
      if (!(d2[3].indexOf("vzaar") > -1))
        throw new Error("Video URL not supported.");
      c2 = "vzaar";
    }
    d2 = d2[6], this._videos[g] = { type: c2, id: d2, width: e2, height: f }, b2.attr("data-video", g), this.thumbnail(a2, this._videos[g]);
  }, e.prototype.thumbnail = function(b2, c2) {
    var d2, e2, f, g = c2.width && c2.height ? 'style="width:' + c2.width + "px;height:" + c2.height + 'px;"' : "", h = b2.find("img"), i = "src", j = "", k = this._core.settings, l = function(a2) {
      e2 = '<div class="owl-video-play-icon"></div>', d2 = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a2 + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a2 + ')"></div>', b2.after(d2), b2.after(e2);
    };
    if (b2.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length)
      return l(h.attr(i)), h.remove(), false;
    "youtube" === c2.type ? (f = "//img.youtube.com/vi/" + c2.id + "/hqdefault.jpg", l(f)) : "vimeo" === c2.type ? a.ajax({ type: "GET", url: "//vimeo.com/api/v2/video/" + c2.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(a2) {
      f = a2[0].thumbnail_large, l(f);
    } }) : "vzaar" === c2.type && a.ajax({ type: "GET", url: "//vzaar.com/api/videos/" + c2.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(a2) {
      f = a2.framegrab_url, l(f);
    } });
  }, e.prototype.stop = function() {
    this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video");
  }, e.prototype.play = function(b2) {
    var c2, d2 = a(b2.target), e2 = d2.closest("." + this._core.settings.itemClass), f = this._videos[e2.attr("data-video")], g = f.width || "100%", h = f.height || this._core.$stage.height();
    this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e2 = this._core.items(this._core.relative(e2.index())), this._core.reset(e2.index()), "youtube" === f.type ? c2 = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c2 = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c2 = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c2 + "</div>").insertAfter(e2.find(".owl-video")), this._playing = e2.addClass("owl-video-playing"));
  }, e.prototype.isInFullScreen = function() {
    var b2 = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
    return b2 && a(b2).parent().hasClass("owl-video-frame");
  }, e.prototype.destroy = function() {
    var a2, b2;
    this._core.$element.off("click.owl.video");
    for (a2 in this._handlers)
      this._core.$element.off(a2, this._handlers[a2]);
    for (b2 in Object.getOwnPropertyNames(this))
      "function" != typeof this[b2] && (this[b2] = null);
  }, a.fn.owlCarousel.Constructor.Plugins.Video = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
  var e = function(b2) {
    this.core = b2, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = true, this.previous = d, this.next = d, this.handlers = { "change.owl.carousel": a.proxy(function(a2) {
      a2.namespace && "position" == a2.property.name && (this.previous = this.core.current(), this.next = a2.property.value);
    }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a2) {
      a2.namespace && (this.swapping = "translated" == a2.type);
    }, this), "translate.owl.carousel": a.proxy(function(a2) {
      a2.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
    }, this) }, this.core.$element.on(this.handlers);
  };
  e.Defaults = { animateOut: false, animateIn: false }, e.prototype.swap = function() {
    if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
      this.core.speed(0);
      var b2, c2 = a.proxy(this.clear, this), d2 = this.core.$stage.children().eq(this.previous), e2 = this.core.$stage.children().eq(this.next), f = this.core.settings.animateIn, g = this.core.settings.animateOut;
      this.core.current() !== this.previous && (g && (b2 = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d2.one(a.support.animation.end, c2).css({ left: b2 + "px" }).addClass("animated owl-animated-out").addClass(g)), f && e2.one(a.support.animation.end, c2).addClass("animated owl-animated-in").addClass(f));
    }
  }, e.prototype.clear = function(b2) {
    a(b2.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
  }, e.prototype.destroy = function() {
    var a2, b2;
    for (a2 in this.handlers)
      this.core.$element.off(a2, this.handlers[a2]);
    for (b2 in Object.getOwnPropertyNames(this))
      "function" != typeof this[b2] && (this[b2] = null);
  }, a.fn.owlCarousel.Constructor.Plugins.Animate = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
  var e = function(b2) {
    this._core = b2, this._timeout = null, this._paused = false, this._handlers = { "changed.owl.carousel": a.proxy(function(a2) {
      a2.namespace && "settings" === a2.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a2.namespace && "position" === a2.property.name && this._core.settings.autoplay && this._setAutoPlayInterval();
    }, this), "initialized.owl.carousel": a.proxy(function(a2) {
      a2.namespace && this._core.settings.autoplay && this.play();
    }, this), "play.owl.autoplay": a.proxy(function(a2, b3, c2) {
      a2.namespace && this.play(b3, c2);
    }, this), "stop.owl.autoplay": a.proxy(function(a2) {
      a2.namespace && this.stop();
    }, this), "mouseover.owl.autoplay": a.proxy(function() {
      this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
    }, this), "mouseleave.owl.autoplay": a.proxy(function() {
      this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
    }, this), "touchstart.owl.core": a.proxy(function() {
      this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
    }, this), "touchend.owl.core": a.proxy(function() {
      this._core.settings.autoplayHoverPause && this.play();
    }, this) }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options);
  };
  e.Defaults = { autoplay: false, autoplayTimeout: 5e3, autoplayHoverPause: false, autoplaySpeed: false }, e.prototype.play = function(a2, b2) {
    this._paused = false, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval());
  }, e.prototype._getNextTimeout = function(d2, e2) {
    return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function() {
      this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e2 || this._core.settings.autoplaySpeed);
    }, this), d2 || this._core.settings.autoplayTimeout);
  }, e.prototype._setAutoPlayInterval = function() {
    this._timeout = this._getNextTimeout();
  }, e.prototype.stop = function() {
    this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"));
  }, e.prototype.pause = function() {
    this._core.is("rotating") && (this._paused = true);
  }, e.prototype.destroy = function() {
    var a2, b2;
    this.stop();
    for (a2 in this._handlers)
      this._core.$element.off(a2, this._handlers[a2]);
    for (b2 in Object.getOwnPropertyNames(this))
      "function" != typeof this[b2] && (this[b2] = null);
  }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
  "use strict";
  var e = function(b2) {
    this._core = b2, this._initialized = false, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": a.proxy(function(b3) {
      b3.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b3.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
    }, this), "added.owl.carousel": a.proxy(function(a2) {
      a2.namespace && this._core.settings.dotsData && this._templates.splice(a2.position, 0, this._templates.pop());
    }, this), "remove.owl.carousel": a.proxy(function(a2) {
      a2.namespace && this._core.settings.dotsData && this._templates.splice(a2.position, 1);
    }, this), "changed.owl.carousel": a.proxy(function(a2) {
      a2.namespace && "position" == a2.property.name && this.draw();
    }, this), "initialized.owl.carousel": a.proxy(function(a2) {
      a2.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = true, this._core.trigger("initialized", null, "navigation"));
    }, this), "refreshed.owl.carousel": a.proxy(function(a2) {
      a2.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
    }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers);
  };
  e.Defaults = { nav: false, navText: ["prev", "next"], navSpeed: false, navElement: "div", navContainer: false, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: true, dotsEach: false, dotsData: false, dotsSpeed: false, dotsContainer: false }, e.prototype.initialize = function() {
    var b2, c2 = this._core.settings;
    this._controls.$relative = (c2.navContainer ? a(c2.navContainer) : a("<div>").addClass(c2.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c2.navElement + ">").addClass(c2.navClass[0]).html(c2.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a2) {
      this.prev(c2.navSpeed);
    }, this)), this._controls.$next = a("<" + c2.navElement + ">").addClass(c2.navClass[1]).html(c2.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a2) {
      this.next(c2.navSpeed);
    }, this)), c2.dotsData || (this._templates = [a("<div>").addClass(c2.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c2.dotsContainer ? a(c2.dotsContainer) : a("<div>").addClass(c2.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function(b3) {
      var d2 = a(b3.target).parent().is(this._controls.$absolute) ? a(b3.target).index() : a(b3.target).parent().index();
      b3.preventDefault(), this.to(d2, c2.dotsSpeed);
    }, this));
    for (b2 in this._overrides)
      this._core[b2] = a.proxy(this[b2], this);
  }, e.prototype.destroy = function() {
    var a2, b2, c2, d2;
    for (a2 in this._handlers)
      this.$element.off(a2, this._handlers[a2]);
    for (b2 in this._controls)
      this._controls[b2].remove();
    for (d2 in this.overides)
      this._core[d2] = this._overrides[d2];
    for (c2 in Object.getOwnPropertyNames(this))
      "function" != typeof this[c2] && (this[c2] = null);
  }, e.prototype.update = function() {
    var a2, b2, c2, d2 = this._core.clones().length / 2, e2 = d2 + this._core.items().length, f = this._core.maximum(true), g = this._core.settings, h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
    if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
      for (this._pages = [], a2 = d2, b2 = 0, c2 = 0; a2 < e2; a2++) {
        if (b2 >= h || 0 === b2) {
          if (this._pages.push({ start: Math.min(f, a2 - d2), end: a2 - d2 + h - 1 }), Math.min(f, a2 - d2) === f)
            break;
          b2 = 0, ++c2;
        }
        b2 += this._core.mergers(this._core.relative(a2));
      }
  }, e.prototype.draw = function() {
    var b2, c2 = this._core.settings, d2 = this._core.items().length <= c2.items, e2 = this._core.relative(this._core.current()), f = c2.loop || c2.rewind;
    this._controls.$relative.toggleClass("disabled", !c2.nav || d2), c2.nav && (this._controls.$previous.toggleClass("disabled", !f && e2 <= this._core.minimum(true)), this._controls.$next.toggleClass("disabled", !f && e2 >= this._core.maximum(true))), this._controls.$absolute.toggleClass("disabled", !c2.dots || d2), c2.dots && (b2 = this._pages.length - this._controls.$absolute.children().length, c2.dotsData && 0 !== b2 ? this._controls.$absolute.html(this._templates.join("")) : b2 > 0 ? this._controls.$absolute.append(new Array(b2 + 1).join(this._templates[0])) : b2 < 0 && this._controls.$absolute.children().slice(b2).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"));
  }, e.prototype.onTrigger = function(b2) {
    var c2 = this._core.settings;
    b2.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c2 && (c2.center || c2.autoWidth || c2.dotsData ? 1 : c2.dotsEach || c2.items) };
  }, e.prototype.current = function() {
    var b2 = this._core.relative(this._core.current());
    return a.grep(this._pages, a.proxy(function(a2, c2) {
      return a2.start <= b2 && a2.end >= b2;
    }, this)).pop();
  }, e.prototype.getPosition = function(b2) {
    var c2, d2, e2 = this._core.settings;
    return "page" == e2.slideBy ? (c2 = a.inArray(this.current(), this._pages), d2 = this._pages.length, b2 ? ++c2 : --c2, c2 = this._pages[(c2 % d2 + d2) % d2].start) : (c2 = this._core.relative(this._core.current()), d2 = this._core.items().length, b2 ? c2 += e2.slideBy : c2 -= e2.slideBy), c2;
  }, e.prototype.next = function(b2) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(true), b2);
  }, e.prototype.prev = function(b2) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(false), b2);
  }, e.prototype.to = function(b2, c2, d2) {
    var e2;
    !d2 && this._pages.length ? (e2 = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b2 % e2 + e2) % e2].start, c2)) : a.proxy(this._overrides.to, this._core)(b2, c2);
  }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
  "use strict";
  var e = function(c2) {
    this._core = c2, this._hashes = {}, this.$element = this._core.$element, this._handlers = { "initialized.owl.carousel": a.proxy(function(c3) {
      c3.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation");
    }, this), "prepared.owl.carousel": a.proxy(function(b2) {
      if (b2.namespace) {
        var c3 = a(b2.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
        if (!c3)
          return;
        this._hashes[c3] = b2.content;
      }
    }, this), "changed.owl.carousel": a.proxy(function(c3) {
      if (c3.namespace && "position" === c3.property.name) {
        var d2 = this._core.items(this._core.relative(this._core.current())), e2 = a.map(this._hashes, function(a2, b2) {
          return a2 === d2 ? b2 : null;
        }).join();
        if (!e2 || b.location.hash.slice(1) === e2)
          return;
        b.location.hash = e2;
      }
    }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function(a2) {
      var c3 = b.location.hash.substring(1), e2 = this._core.$stage.children(), f = this._hashes[c3] && e2.index(this._hashes[c3]);
      f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), false, true);
    }, this));
  };
  e.Defaults = { URLhashListener: false }, e.prototype.destroy = function() {
    var c2, d2;
    a(b).off("hashchange.owl.navigation");
    for (c2 in this._handlers)
      this._core.$element.off(c2, this._handlers[c2]);
    for (d2 in Object.getOwnPropertyNames(this))
      "function" != typeof this[d2] && (this[d2] = null);
  }, a.fn.owlCarousel.Constructor.Plugins.Hash = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
  function e(b2, c2) {
    var e2 = false, f2 = b2.charAt(0).toUpperCase() + b2.slice(1);
    return a.each((b2 + " " + h.join(f2 + " ") + f2).split(" "), function(a2, b3) {
      if (g[b3] !== d)
        return e2 = !c2 || b3, false;
    }), e2;
  }
  function f(a2) {
    return e(a2, true);
  }
  var g = a("<support>").get(0).style, h = "Webkit Moz O ms".split(" "), i = { transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } }, animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } } }, j = { csstransforms: function() {
    return !!e("transform");
  }, csstransforms3d: function() {
    return !!e("perspective");
  }, csstransitions: function() {
    return !!e("transition");
  }, cssanimations: function() {
    return !!e("animation");
  } };
  j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d());
}(window.Zepto || window.jQuery, window, document);
//# sourceMappingURL=scripts.js.map
