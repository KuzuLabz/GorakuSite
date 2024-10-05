# Roadmap

## Update 1.4
🎉 **Goraku will be open source starting with this update!** 🎉  
This will likely be the last large update. Future updates will only include 1-2 new features at a time.

| Status | Feature                                                                                   |
| :----: | :---------------------------------------------------------------------------------------- |
|   ❌    | Notifications Overhaul                                                                    |
|   ❌    | User screens (profile, favorites, list, etc)                                              |
|   🔄    | Bug fixes and minor (but fun) additions                                                   |
|   ✅    | Search overhaul (search by all, anime/manga, characters, staff, studios, users)           |
|   ✅    | Search manga by image (SauceNao) <sup id="a1">[1](#f1)</sup>                              |
|   ✅    | AniCard - a customizable media card that can be shared                                    |
|   ✅    | New WeebLab content (its pretty cool, I promise)                                          |
|   ✅    | Optional service data (MAL, MangaUpdates, MangaDex, Booru) to allow faster load times     |
|   ✅    | Quick Actions / View                                                                      |
|   ✅    | Threads <sup id="a2">[2](#f2)</sup> (viewing only - for now 😅<sup id="a3">[3](#f3)</sup>) |
|   ✅    | Statistics Overhaul                                                                       |
|   ✅    | Site statistics                                                                           |
|   ✅    | AMOLED Dark Mode (pure black)                                                             |


##### Notes
> <sup id="f1">1</sup> SauceNao rarely gave me correct results but I'll add it anyways. [⏎](#a1)  
> <sup id="f2">2</sup> Just like with reviews, thread posts uses AniLists custom markdown. This makes it "annoying" to implement. For now, I'm using regex and cheerio to preprocess the converted html for rendering. [⏎](#a2)  
> <sup id="f3">3</sup> If I add thread inputs (like commenting / replying) then users will likely expect a similar editing experience to the AniList site. This feature would have to wait till after 1.4. [⏎](#a3)  