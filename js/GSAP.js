gsap.registerPlugin(ScrollTrigger);

$(".track-info").click(function () {
  clickDisappear();
});

function clickDisappear() {
  gsap.to(".image-11", {
    opacity: 0,
    duration: 1
  });
}

let mm = gsap.matchMedia();

// Desktop Breakpoints
mm.add("(min-width: 992px)", () => {
  gsap.to(".listen-album-image", {
    display: "none"
  });

  // --- Page 1
  // Fade Out Hero Text
  gsap.fromTo(
    ".hero-left",
    {
      opacity: 1
    },
    {
      opacity: 0,
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: ".listen",
        start: "top 100%",
        end: "top 0%",
        scrub: 0.5
      }
    }
  );

  // Grow Album Art
  gsap.fromTo(
    ".hero-album-art",
    {
      width: "26vw",
      height: "26vw"
    },
    {
      width: "30.5vw",
      height: "30.5vw",
      duration: 1,
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: ".listen",
        start: "top 100%",
        end: "top 0%",
        scrub: 0.5
      }
    }
  );

  // Pin Album Art
  gsap.to(".album-art-frame-hero", {
    scrollTrigger: {
      trigger: ".listen",
      start: "top 100%",
      end: "top 5%",
      pin: ".album-art-frame-hero"
    }
  });

  // --- Page 2
  // Fade In Album Info
  gsap.fromTo(
    ".album-info",
    {
      opacity: 0
    },
    {
      opacity: 1,
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: ".listen",
        start: "top 100%",
        end: "top 0%",
        scrub: 0.5
      }
    }
  );

  // Fade Out Album Info
  gsap.fromTo(
    ".album-info",
    {
      opacity: 1
    },
    {
      opacity: 0,
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: ".about",
        start: "top 100%",
        end: "top 0%",
        scrub: 0.5
      }
    }
  );

  // --- Page 3
  // Fade In About Text
  gsap.fromTo(
    ".about-right",
    {
      opacity: 0
    },
    {
      opacity: 1,
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: ".about",
        start: "top 100%",
        end: "top 0%",
        scrub: 0.5
      }
    }
  );

  // Green BG Fullscreen
  gsap.to(".bg-right", {
    width: "101%",
    ease: "expo.inOut",
    scrollTrigger: {
      trigger: ".about",
      start: "top 100%",
      end: "top 0%",
      scrub: 0.5
    }
  });

  // Floating Head Appear
  gsap.fromTo(
    ".bg-about",
    {
      top: "-100%",
      opacity: 0
    },
    {
      top: "0%",
      opacity: 1,
      display: "block",
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: ".about",
        start: "top 100%",
        end: "bottom 99%",
        scrub: 0.5
      }
    }
  );

  // Nav text to white on about section
  gsap.to(
    ".nav-link, .now-playing-text, .now-playing-track-name, .track-time-elapsed, .track-time-remaining",
    {
      color: "#FEDFA8",
      scrollTrigger: {
        trigger: ".about",
        start: "top 50%",
        end: "bottom 65%",
        scrub: 0.5
      }
    }
  );

  // Progress Bar White
  gsap.to(".progress-bar", {
    backgroundColor: "#FEDFA8",
    scrollTrigger: {
      trigger: ".about",
      start: "top 50%",
      end: "bottom 65%",
      scrub: 0.5
    }
  });

  // Play Button Border Color White
  gsap.to(".play-button, .pause-button", {
    borderColor: "#FEDFA8",
    scrollTrigger: {
      trigger: ".about",
      start: "top 50%",
      end: "bottom 65%",
      scrub: 0.5
    }
  });

  // Hide Green Player Buttons
  gsap.to(
    ".prev-btn-green, .play-btn-green, .pause-btn-green, .next-btn-green",
    {
      display: "none",
      scrollTrigger: {
        trigger: ".about",
        start: "top 50%",
        end: "top 50%",
        scrub: true
      }
    }
  );

  // Show White Player Buttons
  gsap.to(
    ".prev-btn-white, .play-btn-white, .pause-btn-white, .next-btn-white",
    {
      display: "block",
      scrollTrigger: {
        trigger: ".about",
        start: "top 50%",
        end: "top 50%",
        scrub: true
      }
    }
  );

  // --- Page 4
  // Floating Head Disappear
  gsap.fromTo(
    ".bg-about",
    {
      top: "0%",
      opacity: 1
    },
    {
      top: "-100%",
      opacity: 0,
      display: "none",
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: ".contact",
        start: "top 100%",
        end: "bottom 99%",
        scrub: 0.5
      }
    }
  );

  // Fade Out About Text
  gsap.fromTo(
    ".about-right",
    {
      opacity: 1
    },
    {
      opacity: 0,
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: ".contact",
        start: "top 100%",
        end: "top 0%",
        scrub: 0.5
        // markers: true
      }
    }
  );

  // Fade In Contact Form
  gsap.fromTo(
    ".contact-content",
    {
      opacity: 0
    },
    {
      opacity: 1,
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: ".contact",
        start: "top 100%",
        end: "top 0%",
        scrub: 0.5
        // markers: true
      }
    }
  );

  // Brown BG Bottom of screen
  gsap.to(".bg-right", {
    height: "50%",
    ease: "expo.inOut",
    scrollTrigger: {
      trigger: ".contact",
      start: "top 100%",
      end: "top 0%",
      scrub: 0.5
    }
  });

  //  White Social Icons Disappear
  gsap.to(".nav-insta, .nav-spotify", {
    display: "none",
    scrollTrigger: {
      trigger: ".contact",
      start: "top 50%",
      end: "top 50%",
      scrub: true
    }
  });

  //  Green Social Icons Appear
  gsap.to(".nav-insta-green, .nav-spotify-green", {
    display: "block",
    scrollTrigger: {
      trigger: ".contact",
      start: "top 50%",
      end: "top 50%",
      scrub: true
    }
  });

  // Nav Links to Green
  gsap.to(".nav-link", {
    color: "#4d330a",
    scrollTrigger: {
      trigger: ".contact",
      start: "top 50%",
      end: "bottom 65%",
      scrub: 0.5
    }
  });

  // Mike With Mic Appear
  gsap.fromTo(
    ".bg-contact",
    {
      top: "-100%",
      right: "-2%",
      opacity: 0
    },
    {
      top: "-5%",
      opacity: 1,
      display: "block",
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: ".contact",
        start: "top 100%",
        end: "bottom 99%",
        scrub: 0.5
      }
    }
  );
});
