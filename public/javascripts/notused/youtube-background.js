/**
 * jquery.youtube-background v1.0.10 | Nikola Stamatovic <@stamat> | MIT
 */

!(function () {
  "use strict";
  function t(t, e) {
    return t.classList
      ? t.classList.contains(e)
      : new RegExp("\\b" + e + "\\b").test(t.className);
  }
  function e(e, s) {
    e.classList ? e.classList.add(s) : t(e, s) || (e.className += " " + s);
  }
  function s(t, e) {
    t.classList
      ? t.classList.remove(e)
      : (t.className = t.className.replace(
          new RegExp("\\b" + e + "\\b", "g"),
          ""
        ));
  }
  function i(t, e) {
    return (
      (t = Math.ceil(t)),
      (e = Math.floor(e)),
      Math.floor(Math.random() * (e - t + 1)) + t
    );
  }
  const a = document.createElement("script");
  a.src = "https://www.youtube.com/player_api";
  const n = document.getElementsByTagName("script")[0];
  function o(t, e, s, i) {
    (this.is_mobile = (function () {
      let t = !1;
      var e;
      return (
        (e = navigator.userAgent || navigator.vendor || window.opera),
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          e
        ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            e.substr(0, 4)
          )) &&
          (t = !0),
        t
      );
    })()),
      (this.element = t),
      (this.ytid = s),
      (this.uid = i),
      (this.player = null),
      (this.buttons = {}),
      (this.state = {}),
      (this.state.play = !1),
      (this.state.mute = !1),
      (this.params = {}),
      (this.defaults = {
        pause: !1,
        "play-button": !1,
        "mute-button": !1,
        autoplay: !0,
        muted: !0,
        loop: !0,
        mobile: !1,
        "load-background": !0,
        resolution: "16:9",
        onStatusChange: function () {},
        "inline-styles": !0,
        "fit-box": !1,
        offset: 200,
        "start-at": 0,
      }),
      (this.__init__ = function () {
        this.ytid &&
          (this.parseProperties(e),
          (this.params.resolution_mod = (function (t) {
            const e = t.split(/\s?:\s?/i),
              s = 16 / 9;
            if (e.length < 2) return s;
            const i = parseInt(e[0], 10),
              a = parseInt(e[1], 10);
            return isNaN(i) || isNaN(a) ? s : i / a;
          })(this.params.resolution)),
          (this.state.playing = this.params.autoplay),
          (this.state.muted = this.params.muted),
          this.buildHTML(),
          this.injectIFrame(),
          this.pa
      }),
      this.__init__();
  }
  function r(t, e) {
    (this.elements = t),
      "string" == typeof t && (this.elements = document.querySelectorAll(t)),
      (this.index = {}),
      (this.re = {}),
      (this.re.YOUTUBE =
        /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i),
      (this.__init__ = function () {
        for (let t = 0; t < this.elements.length; t++) {
          const s = this.elements[t],
            i = s.getAttribute("data-youtube"),
            a = this.getVidID(i);
          if (!a) continue;
          const n = this.generateUID(a.id);
          if (n && "YOUTUBE" === a.type) {
            const t = new o(s, e, a.id, n);
            this.index[n] = t;
          }
        }
        this.initYTPlayers();
      }),
      this.__init__();
  }
  var l;
  n.parentNode.insertBefore(a, n),
    (o.prototype.initYTPlayer = function () {
      const t = this;
      window.hasOwnProperty("YT") &&
        (this.player = new YT.Player(this.uid, {
          events: {
            onReady: function (e) {
              t.onVideoPlayerReady(e);
            },
            onStateChange: function (e) {
              t.onVideoStateChange(e);
            },
            onError: function (t) {},
          },
        }));
    }),
    (o.prototype.seekTo = function (t) {
      t > 0 && this.player.seekTo(t, !0);
    }),
    (o.prototype.onVideoPlayerReady = function (t) {
      this.params.autoplay &&
        (this.seekTo(this.params["start-at"]), this.player.playVideo());
    }),
    (o.prototype.onVideoStateChange = function (t) {
      0 === t.data &&
        this.params.loop &&
        (this.seekTo(this.params["start-at"]), this.player.playVideo()),
        -1 === t.data &&
          this.params.autoplay &&
          (this.seekTo(this.params["start-at"]),
          this.player.playVideo(),
          this.element.dispatchEvent(
            new CustomEvent("video-background-play", {
              bubbles: !0,
              detail: this,
            })
          )),
        1 === t.data && (this.iframe.style.opacity = 1),
        this.params.onStatusChange(t);
    }),
    (o.prototype.parseProperties = function (t) {
      if (t)
        for (let e in this.defaults)
          t.hasOwnProperty(e) || (this.params[e] = this.defaults[e]);
      else this.params = this.defaults;
      for (let t in this.params) {
        let e = this.element.getAttribute("data-ytbg-" + t);
        null != e &&
          ((e = "false" !== e && e),
          (e = /^\d+$/.test(e) ? parseInt(e, 10) : e),
          (this.params[t] = e));
      }
      this.params.pause && (this.params["play-button"] = this.params.pause);
    }),
    (o.prototype.injectIFrame = function () {
      (this.iframe = document.createElement("iframe")),
        this.iframe.setAttribute("frameborder", 0),
        this.iframe.setAttribute("allow", ["autoplay; mute"]);
      let t =
        "https://www.youtube.com/embed/" +
        this.ytid +
        "?enablejsapi=1&disablekb=1&controls=0&rel=0&iv_load_policy=3&cc_load_policy=0&playsinline=1&showinfo=0&modestbranding=1&fs=0&origin=" +
        window.location.origin;
      if (
        (this.params.muted && (t += "&mute=1"),
        this.params.autoplay && (t += "&autoplay=1"),
        this.params.loop && (t += "&loop=1"),
        (this.iframe.src = t),
        this.uid && (this.iframe.id = this.uid),
        this.params["inline-styles"] &&
          ((this.iframe.style.top = "50%"),
          (this.iframe.style.left = "50%"),
          (this.iframe.style.transform = "translateX(-50%) translateY(-50%)"),
          (this.iframe.style.position = "absolute"),
          (this.iframe.style.opacity = 0)),
        this.element.appendChild(this.iframe),
        this.params["fit-box"])
      )
        (this.iframe.style.width = "100%"), (this.iframe.style.height = "100%");
      else {
        const t = this;
        function e() {
          const e = t.iframe.parentNode.offsetHeight + t.params.offset,
            s = t.iframe.parentNode.offsetWidth + t.params.offset,
            i = t.params.resolution_mod;
          i > s / e
            ? ((t.iframe.style.width = e * i + "px"),
              (t.iframe.style.height = e + "px"))
            : ((t.iframe.style.width = s + "px"),
              (t.iframe.style.height = s / i + "px"));
        }
        window.addEventListener("resize", e), e();
      }
    }),
    (o.prototype.buildHTML = function () {
      const t = this.element.parentNode;
      e(this.element, "youtube-background");
      const s = {
        height: "100%",
        width: "100%",
        "z-index": "0",
        position: "absolute",
        overflow: "hidden",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      };
      if (
        (this.params["mute-button"] || (s["pointer-events"] = "none"),
        this.params["load-background"] &&
          ((s["background-image"] =
            "url(https://img.youtube.com/vi/" +
            this.ytid +
            "/maxresdefault.jpg)"),
          (s["background-size"] = "cover"),
          (s["background-repeat"] = "no-repeat"),
          (s["background-position"] = "center")),
        this.params["inline-styles"])
      ) {
        for (let t in s) this.element.style[t] = s[t];
        t.style.position = "relative";
      }
      if (this.is_mobile && !this.params.mobile) return this.element;
      if (this.params["play-button"] || this.params["mute-button"]) {
        const e = document.createElement("div");
        (e.className = "video-background-controls"),
          (e.style.position = "absolute"),
          (e.style.top = "10px"),
          (e.style.right = "10px"),
          (e.style["z-index"] = 2),
          (this.controls_element = e),
          t.appendChild(e);
      }
      return this.element;
    }),
    (o.prototype.play = function () {
      if (this.buttons.hasOwnProperty("play")) {
        const t = this.buttons.play;
        s(t.element, t.button_properties.stateClassName),
          e(t.element.firstChild, t.button_properties.stateChildClassNames[0]),
          s(t.element.firstChild, t.button_properties.stateChildClassNames[1]);
      }
      this.player &&
        (this.params["start-at"] &&
          this.player.getCurrentTime() < this.params["start-at"] &&
          this.seekTo(this.params["start-at"]),
        this.player.playVideo(),
        this.element.dispatchEvent(
          new CustomEvent("video-background-play", {
            bubbles: !0,
            detail: this,
          })
        ));
    }),
    (o.prototype.pause = function () {
      if (this.buttons.hasOwnProperty("play")) {
        const t = this.buttons.play;
        e(t.element, t.button_properties.stateClassName),
          s(t.element.firstChild, t.button_properties.stateChildClassNames[0]),
          e(t.element.firstChild, t.button_properties.stateChildClassNames[1]);
      }
      this.player &&
        (this.player.pauseVideo(),
        this.element.dispatchEvent(
          new CustomEvent("video-background-pause", {
            bubbles: !0,
            detail: this,
          })
        ));
    }),
    (o.prototype.unmute = function () {
      if (this.buttons.hasOwnProperty("mute")) {
        const t = this.buttons.mute;
        s(t.element, t.button_properties.stateClassName),
          e(t.element.firstChild, t.button_properties.stateChildClassNames[0]),
          s(t.element.firstChild, t.button_properties.stateChildClassNames[1]);
      }
      this.player &&
        (this.player.unMute(),
        this.element.dispatchEvent(
          new CustomEvent("video-background-unmute", {
            bubbles: !0,
            detail: this,
          })
        ));
    }),
    (o.prototype.mute = function () {
      if (this.buttons.hasOwnProperty("mute")) {
        const t = this.buttons.mute;
        e(t.element, t.button_properties.stateClassName),
          s(t.element.firstChild, t.button_properties.stateChildClassNames[0]),
          e(t.element.firstChild, t.button_properties.stateChildClassNames[1]);
      }
      this.player &&
        (this.player.mute(),
        this.element.dispatchEvent(
          new CustomEvent("video-background-mute", {
            bubbles: !0,
            detail: this,
          })
        ));
    }),
    (o.prototype.generateActionButton = function (i) {
      const a = document.createElement("button");
      (a.className = i.className),
        (a.innerHTML = i.innerHtml),
        e(a.firstChild, i.stateChildClassNames[0]),
        this.params[i.condition_parameter] === i.initialState &&
          (e(a, i.stateClassName),
          s(a.firstChild, i.stateChildClassNames[0]),
          e(a.firstChild, i.stateChildClassNames[1]));
      const n = this;
      a.addEventListener("click", function (e) {
        t(this, i.stateClassName)
          ? ((n.state[i.name] = !1), n[i.actions[0]]())
          : ((n.state[i.name] = !0), n[i.actions[1]]());
      }),
        (this.buttons[i.name] = { element: a, button_properties: i }),
        this.controls_element.appendChild(a);
    }),
    (r.prototype.getVidID = function (t) {
      if (null != t)
        for (let e in this.re) {
          const s = t.match(this.re[e]);
          if (s && s.length)
            return (this.re[e].lastIndex = 0), { id: s[1], type: e };
        }
      return null;
    }),
    (r.prototype.generateUID = function (t) {
      let e = t + "-" + i(0, 9999);
      for (; this.index.hasOwnProperty(e); ) e = t + "-" + i(0, 9999);
      return e;
    }),
    (r.prototype.pauseVideos = function () {
      for (let t in this.index) this.index[t].pause();
    }),
    (r.prototype.playVideos = function () {
      for (let t in this.index) this.index[t].play();
    }),
    (r.prototype.initYTPlayers = function (t) {
      const e = this;
      (window.onYouTubeIframeAPIReady = function () {
        for (let t in e.index)
          e.index[t] instanceof o && e.index[t].initYTPlayer();
        t && setTimeout(t, 100);
      }),
        window.hasOwnProperty("YT") &&
          window.YT.loaded &&
          window.onYouTubeIframeAPIReady();
    }),
    "function" == typeof jQuery &&
      ((l = jQuery).fn.youtube_background = function (t) {
        const e = l(this);
        return new r(this, t), e;
      }),
    (window.VideoBackgrounds = r);
})();
