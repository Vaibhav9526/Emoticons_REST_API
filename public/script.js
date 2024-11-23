  // Toggle Accordion
      document
        .getElementById("accordion-header")
        .addEventListener("click", () => {
          const content = document.getElementById("accordion-content");
          content.style.display =
            content.style.display === "block" ? "none" : "block";

          // Populate types dynamically
          if (content.style.display === "block") {
            populateTypes();
          }
        });

      // Populate the types
      function populateTypes() {
        const types = [
          "angry",
          "bad-mood",
          "bear",
          "beg",
          "blush",
          "cat",
          "confused",
          "cry",
          "cute",
          "dance",
          "depressed",
          "devil",
          "disappointed",
          "drool",
          "eat",
          "evil",
          "excited",
          "fall-down",
          "feces",
          "feminine",
          "flip-table",
          "flower",
          "funny",
          "glasses",
          "grin",
          "gross",
          "happy",
          "heart",
          "hello",
          "helpless",
          "hide",
          "hug",
          "kiss",
          "laugh",
          "lenny-face",
          "love",
          "magic",
          "make-up-my-mind",
          "middle-finger",
          "monkey",
          "music",
          "nervous",
          "peace-sign",
          "proud",
          "punch",
          "rabbit",
          "roger-that",
          "roll-over",
          "run",
          "sad",
          "salute",
          "scared",
          "sheep",
          "shocked",
          "shrug",
          "shy",
          "sleep",
          "smile",
          "sparkle",
          "spin",
          "surprised",
          "sweat",
          "take-a-bow",
          "thats-it",
          "thumbs-up",
          "tired",
          "tremble",
          "try-my-best",
          "unicode",
          "upset",
          "vomit",
          "weird",
          "wink",
        ];

        const typesList = document.getElementById("types-list");
        if (typesList.childNodes.length === 0) {
          // Only populate if not already populated
          typesList.innerHTML = types
            .map((type) => `<li>${type}</li>`)
            .join("");
        }
      }

      