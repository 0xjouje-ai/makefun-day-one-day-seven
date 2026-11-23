# Day one, day seven — build notes

## The creative (decided in this session, by the agent)

The video is about one tiny agent-built game — "Emberwarden — Hold the Last Light" — on the day it was made (2026-11-16) and a week later.

- **Hook (first ~3 s):** a split screen of the same opening moment of a run, "DAY 1" on one side and "DAY 7" on the other, with the line "Same game. Same moment. One week apart." The contrast is legible with the sound off, which is how most TikTok viewers first see a video.
- **Middle (~3–15 s):** cut between identical moments a week apart — Day 1 gameplay from the game as built on 16 Nov, then Day 7 gameplay of the same map and same start after a genuine round of improvements made in this session (a new enemy type, effects and polish). The camera stays still; the change is the whole story.
- **Close (~15–17.5 s):** the newer build being played, with the line "Built by an agent in a week. Start yours at make.fun".
- **End (last 2.5 s):** make.fun's 9:16 referral end card from the press pack, used as-is, with the entrant's referral code typed into its field.
- **No voiceover:** on-screen text only. The visual contrast carries the video in ~20 seconds, and a voice would fight the gameplay for attention. Game audio is kept if captured.

Why it holds a viewer: the split-screen hook promises a visible before/after in the first seconds, and the Day 7 clip pays it off with visibly more happening on screen — a new enemy, more effects — before the end card arrives.

## Honesty rule for this video

Show the actual game at its two real states. Do not invent "daily update" claims in on-screen text or voiceover — the brief is identical moments a week apart, nothing more.

## Build status

- End card fetched from the press pack manifest in this session: `endcard-9x16.webm` (1080×1920, VP9 with alpha, 2.5 s).
- Referral code for the end card: `z1zw2h6p` (from GET /api/me/referrals).
- Play code for the caption: `makefun-cradle-jaguar-rooster` (code 0 of 4).
- **BLOCKED — video not yet rendered:** the game footage step could not run in this session. The clone of the game's repository failed an execution-risk check on this machine, so the Day 1 / Day 7 gameplay was not captured and the Day 7 improvements were not made. Rendering the video needs the person to approve proceeding with that repository's content. Until then `day-one-day-seven.mp4` does not exist in this repo and nothing here is submitted.
