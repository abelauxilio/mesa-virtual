/* Acervo da Mesa Virtual
   Efeitos: Freesound (freesound.org), somente licença CC0, prévias em MP3 128 kbps.
   Músicas de ambiente: Tabletop Audio (tabletopaudio.com), licença CC BY-NC-ND 4.0, uso não comercial com crédito.
   Gerado em 20/11/2026. */
(function () {
  // [categoria, nome, loop (1/0), 'id:uid:duração:título original;...']
  const FS = [
    ['combate', 'Espadas se chocando', 0, '37596:199517:0.9:Sword;37605:199517:6.5:swords;471095:9856191:2.8:Sword clash 1;518992:4436626:6.6:SwordClash;275159:4745081:0.6:Sword Clash;439538:3928631:1.6:Epic Sword Clang 2'],
    ['combate', 'Desembainhar espada', 0, '320521:2906614:3.0:Unsheathed blade;107589:1855536:1.0:unsheath_sword;581594:5487341:3.0:Sword draw unsheathe'],
    ['combate', 'Flechas e bestas', 0, '384915:984733:0.8:Bow Release;410751:182472:2.7:Arrow strike;384911:984733:1.0:Arrow Impact 4;384919:984733:1.3:Crossbow Firing and Hitting Target'],
    ['combate', 'Socos e pancadas', 0, '118513:2136023:0.6:Punch_02;460509:6253486:3.1:Hitting in a Face;348244:4067257:4.0:PUNCH-BOXING-01;321482:5485024:1.6:Metal Hit 2'],
    ['combate', 'Machado na madeira', 0, '452554:612689:0.6:axe chop into wood;536736:1415754:0.5:Chop;177045:46808:1.1:Log Split'],
    ['combate', 'Corneta de guerra', 0, '392180:4478330:4.8:Battle_horn_1;244796:4056007:14.3:War of the worlds Horn 1'],
    ['combate', 'Batalha de espadas', 1, '568790:6371307:78.7:sword against sword;175951:2542588:88.0:SwordBattle2'],
    ['magia', 'Feitiço', 0, '264981:3370213:2.0:SFX Magic;351408:4067257:5.4:GLEAM-GLOW-SFX-CHIME;249819:3756348:3.0:Magic Smite;406063:6556800:2.0:Magic Strike'],
    ['magia', 'Bola de fogo', 0, '105016:1535323:2.0:JM_FX_Fireball 01;186932:545448:4.3:fire_explosion;267887:5025429:1.2:Short-Fireball-Woosh;431174:6512859:1.1:Fireball Explosion'],
    ['magia', 'Cura', 0, '562292:11785387:1.2:Heal - Rpg;530488:2532248:0.6:Heal Up;814044:71257:7.2:Creation Magic Blast'],
    ['magia', 'Teletransporte', 0, '150950:2601657:1.2:teleport;512217:10756146:0.8:Poof in cloud;735062:8908475:1.2:Fast Warp In;720108:15107322:2.0:Portal_Active'],
    ['magia', 'Magia sombria', 0, '527636:6142149:5.9:Demonic Anger, Dark Spell;323502:5554674:11.9:Magic: Gargle Spell;657653:6142149:3.1:Black Portal - Dark Dimension Rift;657541:6142149:13.3:Crystal Magic - Dark Spell Rise;814053:71257:7.4:Shockwave'],
    ['magia', 'Energia sombria (loop)', 1, '442825:71257:1.3:Dark Magic Loop'],
    ['monstros', 'Rugido de monstro', 0, '398908:5411212:6.1:Monster Roar 2;170454:2840087:13.1:Angry Beast;20208:98509:8.6:growl1;366671:3415022:8.2:Monster growl;366672:3415022:12.9:Monster Growl with Reverb;267454:3415022:11.9:Beast Roar lvl2'],
    ['monstros', 'Dragão', 0, '85568:1206321:2.5:DRAGON_ROAR;145729:1969152:7.1:Dragon Roar;442964:71257:3.1:Dragon Roar;320345:5286377:5.7:Dino Hiss Dragon Roar;532156:9829875:9.2:dragon breathe fire'],
    ['monstros', 'Lobos uivando', 0, '398430:3862281:8.1:Wolf howl;267179:4875045:8.4:Scary Ghost Wolf Howling;378334:4804147:7.9:Howling wolves'],
    ['monstros', 'Morto-vivo', 0, '370036:4608521:2.6:Grunt;463721:1106446:2.8:Zombie groan moan'],
    ['monstros', 'Passo de gigante', 0, '813056:8698658:2.2:Big robot footstep;815039:8698658:2.0:Big robot footstep 005'],
    ['monstros', 'Asas batendo', 0, '19295:84709:13.8:wing flaps layered;389634:6068748:0.9:Wing Flap 1;386706:5798760:2.2:wings flapping'],
    ['monstros', 'Serpente', 0, '540162:7898982:3.0:Snake hissing;553374:3940234:3.6:Snake Hiss;343927:950925:0.6:hiss2'],
    ['ambiente', 'Chuva', 1, '156994:2394175:600.0:Rain;200273:2322692:95.1:Rain light 2 (rural);200271:2322692:90.1:Rain light 1 (rural);167034:2328971:26.3:Light Rain;607070:11586060:86.8:Light rain;521360:7241289:194.9:Birds in Rain Sounds'],
    ['ambiente', 'Tempestade', 1, '157001:2394175:600.0:Thunderstorm Ambience;237729:3839718:32.9:Rain and Thunder 4'],
    ['ambiente', 'Trovão', 0, '193170:3012047:6.2:thunder;74892:1149857:14.7:lightning strike;242048:1675125:15.0:Lightning Strike;399656:2341984:17.3:thunder blast;465314:9395330:32.2:Thunder;446753:1790434:62.0:Heavy Thunder Strike'],
    ['ambiente', 'Vento', 1, '361053:5914866:240.0:wind-noise;117513:181941:392.1:winter wind;69512:995351:239.5:Winter wind whistling through window;457318:9065275:42.9:Autumn wind and dry leaves'],
    ['ambiente', 'Fogueira', 1, '350757:2472895:39.6:campfire;40699:25133:236.2:campfire;204348:152878:95.5:Crackling Fire;508110:6657854:27.0:fire ambience'],
    ['ambiente', 'Lareira', 1, '624425:13582756:73.3:Fire_Burning_03;138018:464357:170.7:fireplace'],
    ['ambiente', 'Floresta de dia', 1, '463903:7241289:148.6:Birds In Spring;231537:4034520:30.0:Forest_Birds (loop) 02;269570:5126800:86.5:Cuckoo and Nightingale'],
    ['ambiente', 'Noite', 1, '328293:1661766:300.6:Forest at night, crickets, cicadas;333221:2098408:220.1:Night Crickets;522299:9084007:222.6:Crickets At Night;662095:11310256:78.0:amb_forest_night;129678:2362707:15.6:crickets'],
    ['ambiente', 'Caverna', 1, '177958:985466:89.8:Water Dripping in Cave;443061:6229882:60.0:Water Cave;177031:2484711:53.8:Droplets in a cave;23163:88833:42.7:drip'],
    ['ambiente', 'Mar', 1, '412308:7707368:297.8:Big waves hit land;531015:9818404:70.9:Ocean Waves;450755:6253486:92.8:Waves of Hawaii'],
    ['ambiente', 'Riacho', 1, '433589:5618682:68.9:Stream River Water Up Close;415151:7241289:29.0:Stream, Running Water;469009:9518146:299.9:Mountains, Rivers, Streams'],
    ['ambiente', 'Taverna', 1, '212094:221578:371.4:Small_Town_Bar_007;212096:221578:166.0:Small_Town_Bar_004;690597:4458028:140.2:English pub ambiance'],
    ['ambiente', 'Vila e mercado', 1, '578072:5020041:40.4:medieval village atmosphere;424790:2927958:9.6:Crowded street at medieval market;23244:38848:145.0:Market Walk;457618:627541:153.5:Market, people passing;759738:2061858:410.9:Village pond with birds'],
    ['ambiente', 'Masmorra', 1, '516566:2247456:180.0:Dark Dungeon Ambience;530161:2683450:151.6:Dungeon Air;512513:8644110:38.1:HorrorCaveAmbience;422720:4253642:28.9:A Dungeon Ambience Loop'],
    ['ambiente', 'Pântano', 1, '516927:2094018:33.4:swamp at night with crickets;137961:2337290:64.4:Kingdoms of the Night (The Swamp);32655:189568:81.1:Frogs and Crickets B;32654:189568:35.7:Frogs and Crickets A;148318:2578041:44.0:Lake At Night'],
    ['cenario', 'Porta rangendo', 0, '219499:4056007:1.0:Door - Creak;168650:3079181:10.1:DoorCreak;377552:1196472:0.9:Wooden Creak;219492:4056007:1.4:Door - Creak 02'],
    ['cenario', 'Batida na porta', 0, '267931:2198771:9.2:Knock the door;256513:4772965:7.0:Knock on the door;194365:3035766:2.1:Door knocking (Angry)'],
    ['cenario', 'Portão pesado', 0, '336888:5817955:9.8:Gate-Heavy-OpenClose'],
    ['cenario', 'Correntes', 0, '370877:3728489:6.2:Chains;448917:9094336:13.2:Chain Rattling;401621:7516983:9.7:Chain Rattling - 2;345070:1256155:4.2:Chain and lock'],
    ['cenario', 'Moedas', 0, '17502:60285:2.3:Coin dropping;443334:1943411:2.1:MONEY_001;338260:4136102:1.7:Money Bag;162192:1756543:4.5:coins'],
    ['cenario', 'Fechadura e chave', 0, '119918:1990698:4.9:Keys Unlocking Door;390328:4551270:9.5:Door unlocking with keys'],
    ['cenario', 'Baú abrindo', 0, '202092:3756348:4.9:Chest Opening;271378:4709749:6.7:Opening Antique Trunk;391947:6450069:1.0:chest opening crack'],
    ['cenario', 'Papel e livros', 0, '522185:9088543:4.9:Unfurling Paper;405320:5387364:3.0:Paper Crumble;615337:13649160:0.8:Paper_Flip_01;320148:140737:9.0:Sketchbook Page Flips;397548:6142149:0.5:Page Turn 01;457767:9570326:0.7:turnPage'],
    ['cenario', 'Passos', 0, '521590:9395330:3.5:Boot Footsteps on Stone;208103:2943165:8.6:Stone Steps;543385:9067890:5.1:Footsteps snow heavy;231317:3261532:15.0:Footsteps Mud and Grass'],
    ['cenario', 'Cavalos', 0, '175356:2861652:5.8:Horse Galloping;165532:1799601:11.5:Horse Galloping;564628:887696:11.8:Single Horse Gallop;269571:4564240:1.5:horse neigh;521246:8923841:2.3:Horse;826753:3339822:2.1:Horse Neigh'],
    ['cenario', 'Sino', 0, '76405:1020096:4.4:Old Church Bell;425172:8323418:31.6:Church bell;341866:6114721:19.9:Church Bell Konstanz'],
    ['cenario', 'Vidro quebrando', 0, '221528:1038806:1.9:Glass Break;141563:1422573:1.9:Glass Break;448004:7811934:4.1:break-window'],
    ['cenario', 'Explosão e canhão', 0, '235968:4265427:7.8:Explosion_01;47252:364925:1.5:bad explosion;448002:7811934:5.4:cannon'],
    ['cenario', 'Tremor de terra', 0, '222521:255863:11.9:Cracking Earthquake;203281:1256155:30.7:Earthquake rumble'],
    ['cenario', 'Poção borbulhando', 1, '539823:6205597:4.8:Bubbles 001;539822:6205597:6.5:Bubbles 002'],
    ['cenario', 'Mecanismo de armadilha', 0, '752067:71257:2.0:Mechanism Activation Sequence'],
    ['terror', 'Batimento cardíaco', 1, '21409:106798:41.4:heart beat;160504:881494:93.0:heartbeats'],
    ['terror', 'Sussurros', 1, '175944:2007241:23.4:Ghost Whispers;316797:2814648:18.7:Ghostly Whispers;193812:2000738:10.2:Four Voices Whispering 6;193811:2000738:19.4:Four Voices Whispering 2'],
    ['terror', 'Grito', 0, '35716:241598:7.1:scream;235592:3396115:2.5:Girl_Scream;333832:3840537:4.5:Demonic Woman Scream;416838:8247784:1.5:Death Pain'],
    ['terror', 'Fantasma', 0, '495687:8923841:10.6:Moaning Ghost;249597:4508519:24.0:Ghosts moaning;643741:12064174:5.0:Ghostly Moan;469141:2694940:8.0:Ghost Scream;204963:3030084:6.2:Scary Breath;175205:197944:26.0:scary creaking knocking wood'],
    ['terror', 'Risada maligna', 0, '169826:718003:8.1:Evil Laugh;237984:4082826:6.4:witch (laughing);478934:4638708:2.3:evil laugh;179924:3278970:6.6:Laughing Witch'],
    ['terror', 'Corvos', 0, '66763:706955:2.1:Raven;361470:6512973:0.4:Crow Caw'],
    ['terror', 'Clima sombrio', 1, '33796:208116:43.3:ambience03;33703:208116:42.2:ambience02;397091:3287894:59.7:Soft Tonal Wind;371277:6909831:30.9:Dark Ambient Loop;278903:3546642:18.7:Choir'],
    ['pessoas', 'Aplausos e vivas', 0, '333404:5884138:4.1:Cheer 2;277021:1402315:6.3:Applause 2;277020:1402315:6.6:Applause 3'],
    ['pessoas', 'Espanto', 0, '324895:2104797:7.4:Crowd gasp;207779:2046066:1.5:Gasp']
  ];
  const FX_CATS = [['combate', 'Combate'], ['magia', 'Magia'], ['monstros', 'Monstros'], ['ambiente', 'Ambientes'], ['cenario', 'Cenário e objetos'], ['terror', 'Terror'], ['pessoas', 'Pessoas']];
  const fx = [];
  for (const [cat, label, loop, list] of FS) {
    const items = list.split(';');
    items.forEach((s, i) => {
      const p = s.split(':'); const id = +p[0], u = p[1], dur = +p[2], orig = p.slice(3).join(':');
      fx.push({
        id: 'fs' + id, cat, group: label, name: items.length > 1 ? label + ' ' + (i + 1) : label, orig, loop: !!loop, dur,
        url: 'https://cdn.freesound.org/previews/' + Math.floor(id / 1000) + '/' + id + '_' + u + '-hq.mp3',
        page: 'https://freesound.org/s/' + id + '/', license: 'cc0', source: 'Freesound'
      });
    });
  }

  /* Tabletop Audio: key|título|gêneros e tipo|tags|arquivo (só quando foge do padrão)
     gêneros: f fantasia, h terror, i histórico, n natureza, s ficção científica, m moderno
     tipo: M só música, A só ambiente, vazio = ambiente com música */
  const TTA = `534|Apothecary|fi|potions,shop,magic,alchemist
533|Chillwater Reach|fi|city,town,bridge,river
532|Exoplanet|sn|space,planet,forest,jungle
531|Demon Hunter|hf|dungeon,castle,monster,haunted
530|Eldritch Wood|hn|cthulhu,forest,gothic,lovecraft
529|To Catch a Thief|i|chase,london,city,victorian
528|Treefolk Village|fn|trees,forest,woods,town
527|Prismatic Halls|fs|cave,cavern,crystals,underground
526|Lighthouse|ih|ocean,waves,jetty,cthulhu
525|Wormhole|s|black hole,spaceship,space,tunnel
524|Harvest's End|fnh|field,plains,corn,fall
523|Ship Graveyard|fih|ocean,boats,shipwreck,derelict
522|Dragon Clan Attack|f|battle,action,army,cavalry
521|The Last Watcher|f|underground,cavern,ruins,statue
520|Slave Ship Hold|fi|boats,sailing,ships,cargo
519|Assassin's Bazaar|fi|arabian,souk,desert,market
518|Neo Noir|m|city,urban,streets,dark
517|The Beast Within|h|basement,cellar,dungeon,underground
516|Storm Giant|f|weather,lightning,thunder,zeus
515|Raven Queen|fn|forest,woods,trees,hag
514|Millhaven|fi|village,town,windmill,market
513|Seer's Chamber|fi|oracle,delphi,pythia,ritual
512|Robot Caretaker|sm|cyberpunk,android,droid,facility
511|Beyond the Walls|fi|journey,adventure,horses,carriage
510|City of Wonders|fi|city,baldur's gate,waterdeep,sword coast
509|Doors and Corners|sh|expanse,alien,mothership,spaceship
508|Danse de Vampyr|fh|vampire,dracula,castle,barovia
507|Flux Array|sm|station,facility,machines,laboratory
506|The Verdant Dark|fn|jungle,forest,tropics,trees
505|Visitation|fh|exorcist,exorcism,spirits,summoning
504|Privy Council|fi|meeting,chambers,intrigue,royalty
503|Frost Giant Ridge|f|ice,snow,winter,cold
502|Sentient Eye|sm|urban,city,desolate,ruins
501|Crimson Haboob|fn|desert,wind,dune,arabian
500|Village Festival|f|medieval,celebration,crowds,town
499|Ravaged Lands|fhn|wasteland,barren,lava,rocks
498|Urban Rooftop|m|city,bar,party,cocktail|498_Urban_Rooftop.mp3
497|Winter's Veil|fin|snow,buggy,sleigh,carriage
496|Village Raid|fi|vikings,battle,action,war
495|Dedication Day|fi|medieval,city,town,crowds
494|Docks Noir|mih|industrial,harbor,boats,cthulhu
493|News from the Front|fi|winter,woods,forest,horse
492|Maturation Chamber|sm|tank,bacta,laboratory,science
491|Red Dragon Dawn|fi|action,battle,war,soldiers
490|Stone Barrow|fi|tomb,monument,burial,tumulus
489|The Crown Road|fi|highway,commerce,road,path
488|Manor Dark|fih|mansion,house,party,reception
487|High Alert|sm|military,army,base,action
486|War Wagon|f|battle,army,invasion,siege
485|Lady of the Wood|hnf|forest,barren,spirits,ghosts
484|Ready the Castle|fi|medieval,construction,repair,preparations
483|Ice Harvester Station|sm|arctic,snow,frozen,mining
482|Upriver Recon|nm|boat,river,jungle,adventure
481|Witches' Dance|fh|forest,woods,night,midnight
480|Pharaoh's Chamber|fhi|pyramid,egypt,archaeology,tomb
479|Boiler Room|mh|cellar,basement,engine,engine room
478|Gravedigger|fn|grave,graveyard,church,churchyard
477|Lifeboat|n|ocean,sea,water,storm
476|Barghest Fell|fnh|dogs,wolf,wolves,omen
475|Lost Contact|smh|facility,outpost,base,station
474|Kingdom of Mist|fn|peaceful,dragons,city,forest
473|Prison Block|im|jail,genpop,prisoners,revolt
472|Ice Mephit Cavern|fn|snow,cave,ice,action
471|Prisoner Transport|sm|vehicle,tank,guards,jail
470|The Threshing Hour|nmh|cornfield,windmill,farm,rural
469|Monsoon Temple|nfi|asian,buddhist,monks,forest
468|Steampunk Telescope|sf|eberron,observatory,mechanical,machinery
467|Battle Stations|sm|war,machines,deck,hangar
466|Drow Slave Camp|f|underground,underdark,prison,jail
465|Light the Beacons|f|army,battle,fight,skirmish
464|Petrified Forest|fh|woods,medusa,gorgon,basilisk
463|Listening Post|sh|arctic,antarctica,hoth,space
462|Foghaven|f|town,village,city,medieval
461|Resurrection|f|ice,snow,mammoth,wizards
460|Doll Shoppe|fh|mannequins,creepy,victorian,shop
459|Xenon Refinery|sm|planet,space,outpost,alien
458|Deep Blue|snm|ocean,sea,underwater,kelp
457|Hunting Grounds|f|dragons,dragon,drakes,mountains
456|Drawing Room: Night|i|victorian,parlor,storm,night
455|Harper's Waypoint|f|tavern,inn,woods,evening
454|Broken Pantheon|f|temple,dungeon,spirits,ruins
453|Capes and Canes|im|london,city,victorian,rain
452|The Last Express|im|trains,steam,train station,station
451|Orb of Doom|fh|magic,monks,chant,magical
450|Nightlands|fh|shadows,barren,wasteland,darkness
449|A Royal Visit|fi|medieval,procession,festival,parade
448|Checkpoint Omega|sm|soldiers,military,space station,spacestation
447|The Murky Depths|f|underground,underdark,cavern,jungle
446|Between Adventures|f|tavern,inn,downtime,peaceful
445|Lava King's Lair|fh|cave,cavern,grotto,lava
444|Yuletide Cantrips|f|city,neverwinter,baldur's gate,fireworks
443|Primate Lab|sh|science,laboratory,animals,experiments
442|Darkmoor|fh|werewolf,monster,woods,moors
441|Tech Market|sm|cyberpunk,urban,city,noir
440|Map Chamber|fi|peaceful,greek,roman,water
439|Goodhaven|fn|town,village,river,lake
438|Red Sky Mine|sm|excavation,dig,alien,aliens
437|Dungeon Asylum|fh|sanitarium,demons,prison,underground
436|Winter Encampment|fin|camp,bivouac,army,soldiers
435|The Undercroft|fi|castle,cellar,basement,dungeon
434|Cryo Pods|sh|spaceship,alien,aliens,isolation
433|Spectral Abbey|fh|castle,ruins,clifftop,wind
432|Lair of the Wyrm|fh|cave,cavern,dragon,boss
431|Hotel Noir|i|1940s,1930s,cthulhu,jazz
430|Fire Dance|fhn|pagan,ritual,jungle,forest
429|Imperial Pursuit|s|star wars,deathstar,stormtroopers,empire
428|The Sisterhood|sf|dune,arrakis,bene gesserit,chapterhouse
427|Bug Hunt|sh|alien,aliens,spacestation,spaceship
426|Stagecoach Heist|i|west,american,cowboys,horses
425|The Stranger|i|west,american,cowboys,horses
424|Frontier Town|i|west,american,cowboys,village
423|Magical Flora|fsn|biome,forest,flowers,jungle
422|Ghost Ship|fih|boat,ship,sailing,water
421|The Madding Crowd|fi|city,urban,town,waterdeep
420|Counting House|fi|bank,money,exchange,gringotts
419|Hidden Passage|f|tunnel,mountain pass,shortcut,cave
418|Pagan Woods|fnh|forest,ruins,norse,viking
417|Mainframe|sm|motherboard,computer,cyberpunk,cyberspace
416|Rebuilding|fi|city,village,town,medieval
415|Jungle Bunker|sn|forest,endor,star wars,stormtroopers
414|Stakeout|m|city,urban,spy,spies
413|Collegium Magica|f|library,study,mage,maester
412|Tomb Guardians|fh|statues,crypt,cave,cavern
411|Ship of the Line|i|ship,sailing,navy,ocean
410|Forgotten Forest|f|woods,dark,magic,magical
409|Docking Procedure|ms|space,spaceship,spacestation,freight
408|Nautiloid Escape|fs|mind flayers,illithid,elder brain,action
407|Viking Tavern|fi|inn,bar,pub,alehouse
406|Treacherous Path|fhs|danger,road,lava,fire
405|Brood Mother|fhs|spiders,hatchery,aragog,aliens
404|Vampyr|fh|castle,undead,vampire,strahd
403|Steel Foundry|f|dwarven,dwarf,metal,blacksmith
402|The Drowned Tower|fn|underwater,ocean,sea,ruins
401|Feast of Crispian|fi|tavern,inn,pub,hall
400|Whispering Caverns|fn|cave,grotto,spirits,ghosts
399|Whiteout|fn|winter,snow,blizzard,tundra
398|The Misty Marsh|fn|ocean,sea,water,saltmarsh
397|Homecoming|fi|medieval,festival,city,town
396|The Ansible|sf|artifact,ruins,ancient,mountain
395|Launch Day|sf|cyberpunk,spaceship,spacestation,space
394|Demon Army|f|battle,action,war,underworld
393|Hellhound Alley|fm|cyberpunk,street,night,dogs
392|Trireme|in|ocean,sea,waves,boat
391|Train Job|im|action,suspense,chase,locomotive
390|Desert Devotional|f|temple,monks,chant,prayer
389|Medieval Market|fn|peaceful,spring,birds,town
388|Lord of Bones|fh|monster,skeleton,dungeon,hell
387|Docking Bay|s|mechs,army,troops,battle
386|The Attic|h|house,haunted,creepy,scary
385|Infiltration|f|stealth,escape,heist,guards
384|Western Watchtower|f|fortress,ruins,mountains,castle
383|Banshee's Lair|f|house,shack,cabin,witch
382|Long Rest|f|camp,campsite,quiet,peaceful
381|Halfling Sneak|f|stealth,comedy,hobbits,castle
380|The Great Lift|f|machine,mechanical,steampunk,engine
379|Terraforming|sm|mars,terraforming mars,atmosphere,machine
378|Descent|f|cave,cavern,underdark,underground
377|Through the Woods|f|horses,carriage,buggy,chase
376|Voyage Begins|f|docks,intro,beginning,ships
375|Rise of the Golem|fh|magic,spells,wizards,clay
374|Hall of Angels|f|museum,sculpture,statues,seraphs
373|Infernal Machine|sf|mechanical,mechanism,steampunk,clockwork
372|Den of Iniquity|if|tavern,bar,pub,brothel
371|Whirlpool|nf|shipwreck,ship,ocean,sea
370|Awakenings|sm|robot,android,artificial,automaton
369|Troll Grotto|fn|cave,monster,tribal,tense
368|Ghosts of Appalachia|fn|hut,shack,spirits,country
367|Rope Bridge|fn|jungle,clifftop,cliff,danger
366|Roc's Nest|f|mountain,clifftop,birds,tension
365|Trail of Ashes|if|war,marching,march,battlefield
364|River of Blood|fh|avernus,barren,wasteland,dead
363|Starship Adrift|f|space,spaceship,star trek,interstellar
362|Rolling Emporium|f|oxen,oxcart,aurochs,market
361|Ancient Beacon|fs|desert,dune,pyramid,ansible
360|Pit Fighter|fi|arena,colosseum,gladiators,combat
359|Skull Island|fn|ocean,adventure,drama,ship
358|Egg Chamber|fns|alien,aliens,creepy,hatchery
357|Promontory|fn|ocean,waves,cliff,clifftop
356|Adventure Begins|f|waterdeep,neverwinter,baldur's gate,city
355|Hydroponics Bay|s|starship,star trek,enterprise,vines
354|Warlock's Whisper|nfh|magic,dark,evil,sorcery
353|Spirit of the Plains|nf|peaceful,magical,magic,spiritual
352|Black Rider|fh|tolkien,hobbits,action,nazgul
351|Halfling Lodge|f|tavern,inn,hobbits,tolkien
350|Covert Ops|m|spy,espionage,city,urban
349|Puzzle Dungeon|f|labyrinth,maze,mechanical,crypt
348|Viking Village|if|town,north,snow,cold
347|Elven Procession|nf|forest,woods,elves,elf
346|Tinkertown|sm|robots,machines,junkyard,cyberpunk
345|High Seas Pursuit|in|ship,ships,sailing,ocean
344|Yokai Forest|nfh|yokai,demon,spirit,japan
343|Dungeon Collapse|f|action,battle,combat,chase
342|Tavern Celebration|f|inn,festival,dance,party
341|Beggar's Rest|fi|city,village,slum,ghetto
340|Starbase Omega|s|space,spacestation,spaceship,interstellar
339|Red Planet|s|mars,desert,wind,sand
338|Adventure Supply|f|shop,store,merchant,general store
337|Village of the Damned|fh|scary,storm,rain,creepy
336|Medieval Banquet|fi|feast,party,gathering,wedding
335|Abandoned Chapel|f|temple,church,cathedral,ruins
334|Harpies' Nest|f|harpy,action,battle,wind
333|Arcane Athenaeum|mf|library,magic,books,scrolls
332|Myconid Colony|nf|underdark,dank,dark,spooky
331|Drowned Sailors|nf|beach,ocean,shipwreck,water
330|Mega City Slums|sm|cyberpunk,urban,future,tech
329|Desert Temple|fn|sand,wasteland,dune,bedouin
328|Battle Requiem|f|war,tragedy,battlefield,defeat
327|Distilled: Tropical|nm|beach,ocean,waves,surf
326|Distilled: Tranquility|n|asia,china,japan,zen
325|Distilled: Warehouse|im|barrels,whiskey,whisky,storage
324|Distilled: Highlands|n|peat,mountains,hills,scotland
323|Distilled: Backwoods|nm|still,whisky,whiskey,moonshine
322|Distilled: Cooperage|im|barrels,whiskey,whisky,workshop
321|Invisible Mountain|fn|tepui,peaceful,stream,wind
320|Cultist's Cavern|f|pagan,ritual,magic,occult
319|Shaman's Hollow|fn|forest,woods,magic,ritual
318|The Gaping Maw|s|gate,mordor,action,drama
317|Robot Scrapyard|s|robots,junkyard,machines,scrap
316|Goblin Ambush|f|battle,action,combat,phandelver
315|Dragon Rider|f|action,wyvern,wind,chase
314|Shuttle Crash|fsn|alien,planet,jungle,swamp
313|Dusk of the Dryad|fhn|woods,forest,trees,spooky
312|Generation Ship|s|space,interstellar,mothership,spaceship
311|Swamp Thing|fhn|marsh,monster,spooky,boat
310|Moisture Farm|s|star wars,tatooine,desert,barren
309|Bloodgate|f|gateway,portal,dimension,lich
308|Skullwharf|f|port,docks,underground,underdark
307|Sand Raiders|sm|star wars,tusken raiders,tatooine,desert
306|Aftermath|sm|nuclear,cataclysm,wasteland,survivor
305|Hidden Valley|fn|wind,quiet,peaceful,safe
304|Fog of War|fh|vikings,battle,camp,bivouac
303|Summoning|f|witches,witchcraft,coven,ritual
302|Floating Market|f|water,bazaar,vendor,river
301|Pool of Radiance|f|water,magic,peaceful,ritual
300|Burn Maneuver|sm|space,spaceship,stars,star trek
299|Necropolis|fh|ruins,ancient,death,city
298|Gateway to Hell|fh|volcano,crater,fire,fiery
297|Survivors' Bivouac|f|camp,encampment,campsite,refugee
296|The Frozen Trail|n|winter,ice,arctic,north
295|Closing Time|m|cyberpunk,city,urban,traffic
294|Cutpurse Pursuit|fi|medieval,town,city,alley
293|Sanitarium|hi|cthulhu,lovecraft,mythos,hospital
292|Bleakwater Docks|hi|cthulhu,harbor,boats,fishing
291|Investigator's Office|hi|detective,cthulhu,vintage,noir
290|Wagon Ride|f|horse,carriage,cart,oxen
289|Ancient Artifact|fs|alien,object,temple,dune
288|Everdeep|f|ocean,sea,underwater,netherdeep
287|The Strange|f|apothecaria,city,chaos,chaotic
286|Blastfire Bog|f|apothecaria,swamp,insects,goblins
285|High Rannoc Village|f|apothecaria,town,village,mountain
284|Oasis City|fi|souk,arab,arabian,sand
283|Pattern Recognition|sm|cyberpunk,computers,stealth,suspense
282|The Wild Hunt|fn|action,combat,chase,horses
281|Escape from Shadow|f|action,combat,battle,drama
280|The City Above|m|urban,skyscraper,city,rooftop
279|Blighted Farm|fn|rural,medieval,village,town
278|Farmyard|fn|rural,medieval,town,village
277|A New Beginning|fsn|peaceful,ocean,waves,planet
276|Forge of Fury|f|dwarf,dwarven,smith,fire
275|Lorekeeper Grove|fn|rites,jungle,beach,waterfall
274|Jungle Shaman|fn|rites,jungle,beach,waterfall
273|Arcane Clockworks|f|steampunk,mechanical,gears,dance
272|Starforged: Vault|s|abandoned,derelict,relics,technology
271|Starforged: Fray|sM|action,combat,star wars,spaceship
270|Starforged: Sojourn|s|settlement,outpost,colony,star trek
269|Starforged: Planetside|s|exploration,alien,planet,star trek
268|Starforged: Space|s|interstellar,stars,space,star trek
267|Court of the Count|fh|strahd,dracula,castle,cthulhu
266|Orbital Prison Break|sm|battle,war,action,fight
265|Shrine of Talos|fn|temple,church,cult,mountain
264|Base Assault|sm|battle,war,action,fight
263|Mysterious Grotto|fn|cave,dark,lair,cavern
262|Victorian Slums|i|london,dickens,city,ghetto
261|Unto the Breach|fi|battle,war,siege,skirmish
260|Skyship|f|airship,flying,sailing,transport
259|Grand Theater|im|theatre,drama,auditorium,playhouse
258|Blighted Forest|fnh|rot,disease,evil,corrupted
257|Country Workshop|fn|rural,town,medieval,peaceful
256|Ice Dragon|f|snow,battle,boss,dragon
255|The Hearth Inn|f|tavern,pub,inn,candlekeep
254|Desert Planet Souk|fs|sand,tatooine,jawas,droids
253|Submerged|fn|ocean,water,dark,calm
252|Vault of Terror|fh|tomb,dungeon,dark,occult
251|Candledeep|fi|library,candlekeep,fortress,books
250|Wolf Pens|f|wolves,dungeon,jail,cellar
249|Steampunk Station|fi|victorian,trains,machines,clock
248|Alien Reactor|sh|cthulhu,dark,scary,tense
247|Oregon Trail|i|west,america,wagon,wagon train
246|Magic Shoppe|f|harry potter,ollivander,general store,store
245|Secret Facility|sm|cyberpunk,tension,tv,drama
244|Vikings|fi|ocean,sail,boats,battle
243|Jungle Ruins|fni|aztec,mayan,temple,forest
242|Spider's Den|fh|dark,cave,lair,dungeon
241|Pirates!|fi|sailing,ship,ocean,boat
240|Throne Room|fi|palace,regal,royalty,court
239|Nordic Noir|m|police,drama,television,tv
238|Mind Flayer Chamber|f|illithid,dungeon,suspense,brain
237|Training Grounds|fi|swords,fight,spar,battle
236|Defiled Temple|fh|dungeon,monsters,dark,cult
235|Rainy Village|f|peaceful,town,rain,thunder
234|Lush World|fn|peaceful,quiet,water,calm
233|The Orrery|f|church,temple,cathedral,mechanical
232|Mech War|ms|battle,war,action,robot
231|Icebound Town|hf|cold,winter,ice,frozen
230|All Hallows Eve|hf|strahd,dracula,vampire,wolf
229|Interrogation Room|m|cyberpunk,police,tension,tense
228|Mushroom Forest|fn|ethereal,psychedelic,trippy,peaceful
227|Terror in the Woods|h|lovecraft,action,chase,tension
226|60s Computer Lab|is|1950s,1960s,synthesizer,tension
225|New Orleans Noir|ih|1920s,1930s,gothic,cthulhu
224|Mansion: Night||stealth,search,house,sneak
223|Salt Marsh|nf|ocean,sea,water,saltmarsh
222|Wuxia Tea House|fi|asian,chinese,china,martial arts
221|Sunken Treasure|ni|underwater,water,deep,ocean
220|Wuxia Village|fi|asian,chinese,china,martial arts
219|Tinkerers Workshop|f|gnomes,shop,machines,funny
218|Sleeping Ogre|f|stealth,dungeon,quiet,tense
217|Storm at Sea|i|sailing,ship,ocean,waves
216|Waterkeep: Night|fi|medieval,city,town,waterdeep
215|Space Battle|s|action,combat,star wars,spaceship
214|Castle Kitchen|fi|medieval,cooking,food,restaurant
213|Burning Village|fm|fire,chaos,destruction,town
212|Witch Mountain|M|action,magic,fight,battle
211|Thieves' Guild|mM|action,stealth,cyberpunk,mysterious
210|Temple Garden|nf|peaceful,quiet,zen,water
209|Rat Battle|M|fight,battle,action,skirmish
208|Ghost Town|fi|desolate,rural,village,eerie
207|Biodome|m|peaceful,breeze,drama,relaxing
206|Heart: High Rise|fh|ropes,bridges,wind,buildings
205|Heart: Absolution|fh|chaos,nightmare,dreams,alien
204|Heart: Meat Corridor|fh|tunnel,decay,rot,flesh
203|Heart: Briar|fh|forest,woods,beasts,jungle
202|Heart: Drowned|fh|water,sewers,cave,tunnel
201|Haven||peaceful,rain,calm,mourning
200|Druid Hilltop|f|occult,ritual,summoning,yester hill
199|Sun Dappled Trail|fn|forest,horses,peaceful,woods
198|Shadowfell|fh|scary,eerie,dark,ominous
197|Battle of the Amazons|fi|action,fight,clash,combat
196|Crossing the Styx|fh|boat,water,charon,row
195|Shopping Mall|m|crowds,promenade,galleria,stores
194|Tarrasque Interior|fh|monster,dank,wet,ominous
193|The Steppes|M|drums,war,battle,army
192|Swamp Planet|sf|alien,jungle,humid,insects
191|Dying World|sf|alien,solitude,wind,dystopia
190|1940s Boardwalk|i|seaside,ocean,beach,1940s
189|Yuletide|im|christmas,fireplace,peaceful,winter
188|Barovian Village|fi|mountain,city,town,medieval
187|Endgame|M|battle,drama,action,fight
186|Haunted|h|scary,eerie,halloween,ghosts
185|Gravity|sM|space,orbit,tension,ominous
184|Underground Lake|fn|water,cave,cavern,mountain
183|Sea of Moving Ice|fn|ocean,storm,waves,ominous
182|Country Village|f|rural,town,medieval,peaceful
181|Cyberpunk Bar|sm|urban,future,blade runner,shadowrun
180|Abandoned Windmill|fih|rural,country,landscape,building
179|Cyberpunk City|sm|urban,future,blade runner,shadowrun
178|Ice Throne|f|cavern,frozen,cold,lich
177|Tavern Music|fiM|inn,hearth,meeting,bard
176|Barren Wastes|nfsh|desert,steppes,lonely,solitude
175|Royal Court|fi|king,queen,royalty,palace
174|Wizard's Tower|fM|magic,heroic,drama,action
173|Robotics Lab|sm|technology,hi-tech,spaceship,spacestation
172|Castle Jail|fh|dungeon,prison,cell,torture
171|Cry Havoc|M|battle,drama,action,fight
170|The Underdark|f|dungeon,underground,dark,drow
169|The Feywild|f|peaceful,forest,nature,trees
168|Neon Drive|M|action,drama,synth,boss
167|Fishing Village|fi|ocean,sea,ships,sail
166|Quiet Cove|nf|ocean,sea,ships,sail
165|RMS Titanic|i|ocean,sea,ships,steamer
164|Cistern|fi|dark,dank,dripping,tunnel
163|Medieval Fair|fi|festival,town,village,market
162|Dark Angel|mM|action,drama,synth,90s
161|Forest: Day|nf|quiet,breeze,trees,birds
160|Shanghai 1930s|i|jazz,china,asia,orient
159|Stables|fi|medieval,horses,hitch,grooming
158|Waterkeep|f|medieval,city,town,waterdeep
157|Field of Heroes|M|battle,drama,action,fight
156|Star Freighter|s|cargo,space,spaceship,peaceful
155|Outpost 31|shM|antarctica,arctic,snow,ice
154|Artist's Garret|i|attic,rain,writing,fireplace
153|Secret Garden|fn|elves,elf,forest,woods
152|Nostromo|sh|spaceship,salvage,aliens,reavers
151|Metropolis Fanfare|M|combat,battle,action,drama
150|Loop Tales|s|technology,tales from the loop,cyberpunk,abstract
149|Lakeside Camp|n|river,stream,water,campsite
148|Barovian Castle|fh|strahd,dracula,vampire,wolf
147|Graveyard|fh|tomb,castle,strahd,dracula
146|Floating Ice Castle|fA|palace,frozen,fortress,clouds
145|Cotton Club|i|jazz,harlem,club,bar|145_Cotton_Club_CLEAN.mp3
144|War Zone|im|warfare,helicopters,combat,huey
143|Elegant Dinner Party|i|supper,dining,jane austen,social
142|Mummy's Tomb|fih|egypt,pharaoh,pyramid,burial
141|Hermit Hut|fi|wind,cabin,shack,hovel
140|Dark Future|sm|neon,cyberpunk,noir,space
139|Sunken Temple|nf|underwater,water,deep,sunken pyramid
138|Desert Winds|n|storm,sandstorm,sand,arabian
137|Mill Town|fi|river,stream,village,water|137_Mill_Town_a.mp3
136|Temple of Helm|fi|prayer,gods,religion,sanctuary|136_Temple_Of_Helm.mp3
135|Dark Matter|sfh|infinity,cosmos,universe,celestial
134|Carriage Journey|fi|horses,traveling,buggy,cart
133|Halfling Festival|f|party,wedding,dance,hobbits
132|Open Ocean|n|water,waves,sea,peaceful
131|The Bog Standard|fiA|inn,tavern,hearth,food
130|Russian Winter|n|snow,ice,slavic,cold
129|Weirder Things 2|M|80s,synth,tv,television
128|Waiting Time|M|clockwork,gnomes,gears,patience
127|Car Chase|m|70s,cops,police,funk|127_Car_Chase_a.mp3
126|Endless Voyage|smM|synth,journey,space,exploration
125|Existential Dread|hA|halloween,fear,buried,paranoid
124|Spire: The Vermissian|fh|vibrations,machinery,wind,tunnels
123|Spire: The Hatchery|fh|insects,spiders,creepy,skittering
122|Spire: The Ministry|fh|secrets,whispers,prayer,temple
121|Spire: Derelictus|fh|dripping,dark,chants,drow
120|Spire: New Heaven|fh|wind,mourning,chants,priests
119|Spire: Amaranth|fh|ice,crystalline,frozen,cold|119_Spire_Amaranth_a.mp3
118|Spire: The Heart|fh|decay,blood,insects,rotting|118_Spire_The_Heart_a.mp3
117|Crossroads|mi|southern,blues,guitar,bayou
116|RavenPuff Common|fi|potter,hogwarts,magic,victorian
115|Antiquarian Study|if|mystery,sleeping,suspense,victorian
114|Dwarven City|f|underground,dark,dwarf,moria
113|Astral Plane|sfA|ethereal,dark,abstract,swirl
112|Ethereal Plane|sf|astral,peaceful,abstract,swirl
111|Orbital Promenade|sm|space station,star trek,star wars,future
110|Wild West Saloon|i|west,western,ragtime,music
109|747 Interior|miA|aircraft,airplane,cabin,white noise
108|Carnival|miA|fairground,fair,rides
107|Lonesome West|if|west,western,horses,dusty
106|Lunar Outpost|smh|suspense,abandoned,machines,industrial
105|Weirder Things|M|80s,synth,tv,television|105_Weirder_Things_2.mp3
104|River Town|fn|elves,elven,elf,water
103|Testing Chamber|smA|portal,factory,industrial,machines
102|Vampire's Castle|hf|vampire,gothic,castle,haunted|102_Vampire_Castle.mp3
101|Highway|m|road,cars,lynch,hitch
100|Volcano|n|hell,bubbling,sulphur,devil
99|Cavern of Lost Souls|fhA|spirits,ghosts,wailing,danger
98|Lost Mine|f|adventure,tolkien,khazad dum,dwarf
97|City Under Siege|msA|battle,assault,urban,weapons
96|Windswept Plains|niA|indian,native,american,horses|96_Windswept_Plains_b.mp3
95|Arabesque|iM|horses,desert,middle eastern,nomad
94|Noir Procedural|m|police,drama,television,tv
93|Starship Medical|s|trek,space,station,doctor
92|Skirmish|f|battle,drama,action,fight
91|Elven Glade|fn|elves,elf,forest,woods
90|Dungeon II: Mechanical|fhA|dwemer,dwarf,dwarven,gears
89|Winter Woods|n|peaceful,quiet,solitude,outdoors
88|Lively Cafe|mA|coffee shop,productivity,cafe,restaurant
87|Winter Festival|im|christmas,xmas,festivus,holiday
86|Dark City|m|action,mysterious,television,tv
85|Sewers|fmhA|dark,dank,dripping,tunnel
84|Lucha Libre!|mA|mexican,wrestling,arena,crowds
83|Haunted Ramparts|h|ghosts,spooky,scary,halloween
82|Nightmare|hA|ghosts,spooky,scary,halloween
81|1920s Speakeasy|i|jazz age,20s,30s,food
80|Blacksmith Shoppe|fi|metal,anvil,horse,armor
79|Medieval Battle|fiA|army,armies,horses,weapons
78|Steampunk Airship|fsA|blimp,dirigible,victorian,jules verne
77|Abandoned Fair|mh|apocalypse,post-apocalyptic,desolate,eerie
76|Alchemist's Lab|fA|spells,potions,laboratory,bubbling
75|Docks District|fiA|boats,harbor,shady,water
74|Zombies!|hm|walking dead,undead,halloween,brains|74_Zombies!.mp3
73|Medieval Library|ifA|books,quills,scholars,study
72|Monster Attack!|mhsA|godzilla,tokyo,japan,king kong
71|Sleeping Dragon|f|smaug,treasure,gold,red dragon
70|The Age of Steam|iA|trains,engines,locomotive,train station|70_Age_of_Steam.mp3
69|Forest: Night|nA|quiet,breeze,trees,birds
68|1940's Office|i|40s,50s,30s,gangster
67|Asylum|mh|insane,crazy,spooky,madness
66|Royal Salon|i|party,18th century,france,french
65|Dungeon I|fh|adventure,treasure,underground,quest
64|Mountain Pass|fn|journey,travel,wind,rain
63|Industrial Shipyard|mA|boats,ships,industry,docks
62|Middle Earth: Dawn|f|travel,adventure,peaceful,tolkien|62_Middle_Earth_Dawn.mp3
61|Orbital Platform|s|space,future,stars,trek
60|Dark and Stormy|nhA|rain,wind,spooky,weather
59|Dinotopia|nf|dinosaurs,jungle,evolution,evo
58|Terror|hA|terror,halloween,scary
57|Colosseum|iA|roman,rome,gladiators,combat
56|Medieval Town|ifA|medieval,town,city,village
55|Ice Cavern|nfhA|cave,freezing,cold,snow
54|Mountain Tavern|ifA|inn,hearth,food,drink
53|Strangers on a Train|iA|orient express,rail,railroad,mystery
52|Warehouse 13|mh|factory,industrial,abandoned
51|Woodland Campsite|fnA|woods,campfire,fire,horses
50|Super Hero|m|action,city,explosions,thriller
49|Goblin's Cave|fA|dark,dripping,stream,cavern|49_Goblin%27s_Cave.mp3
48|Overland with Oxen|fnA|ox,cart,wagon,travel
47|There be Dragons|fhA|fight,battle,dragons,quest
46|Cathedral|fiA|church,holy,paladin,ethereal
45|Samurai HQ|i|horses,japanese,army,bivouac
44|Victorian London|ihA|jack the ripper,sherlock holmes,city,streets
43|Dome City Center|sm|urban,future,futuristic
42|Rise of the Ancients|fhA|cthulhu,cult,lovecraft,demon
41|Starship Bridge|sA|deck,space,spaceship,enterprise
40|The Long Rain|nm|downpour,storm,monsoon,water
39|Temple of the Eye|fhA|cult,chant,ritual,dark energy
38|Into the Deep|mnA|underwater,water,deep,dive
37|Catacombs|fhA|underground,dark,grave,tomb
36|Down by the Sea|n|water,ocean,beach,gulls
35|Swamplandia|n|swamp,jungle,insects,water
34|Clash of Kings|f|battle,weapons,armor,marching
33|Far Above the World|s|space,outerspace,quiet,dark
32|City and the City|m|urban,streets,traffic,nightlife
31|Frozen Wastes|nA|ice,arctic,tundra,wind
30|Los Vangeles 3030|sm|synthesizer,blade runner,future,city
29|Kaltoran Craft FE|s|fragged empire,spaceship,starship,space opera
28|Nephilim Labs FE|shA|fragged empire,laboratory,genetics,experiments
27|Xingu Nights|nA|jungle,birds,insects,trees
26|Uncommon Valor|i|war,combat,wwii,wwi|26_Uncommon_Valor_a.mp3
25|Deep Space EVA|sh|spacewalk,asteroids
24|Forbidden Galaxy!|sA|space,weapons,vintage,planet
23|The Slaughtered Ox|fi|inn,tavern,food,drink
22|True West|i|horses,western,cowboys,dusty|22_True_West_a.mp3
21|Derelict Freighter|shA|spaceship,salvage,space opera,reavers
20|Dark Continent|fih|rhythm,drums,chant,tribal|20_Dark_Continent_aa.mp3
19|The Age of Sail|i|ships,ocean,navy,naval|19_Age_of_Sail.mp3
18|House on the Hill|ih|lovecraft,betrayal,creepy,haunted
17|Alien Night Club|sA|cantina,bar,music,scum
16|Busy Space Port|s|spaceship,travel,alien,outpost
15|Alien Machine Shop|sA|spaceship,repair,mechanic
14|Protean Fields|fsmM|suspense,ethereal,astral,drone
13|Cave of Time|fn|dripping,bats,underground,wind
12|Disembodied Spirits|f|ghosts,dark,abstract,music
11|Shelter from the Storm|hsA|brooding,abstract,music,menacing
10|In the Shadows|shA|abstract,void,wind,music|10_In_The_Shadows.mp3
9|Before the Storm|f|calm,rain,mourning|9_Before_The_Storm.mp3
8|Dust to Dust|f|ethereal,deep,brooding,abstract|8_New_Dust_to_Dust.mp3
7|The Desert Awaits|f|sand,ethnic,tribal,wind
6|Abyssal Gaze|sf|dark,void,lonely
5|Desert Bazaar|f|arabian,dune,market,suspense
4|Solemn Vow|fM|brooding,sad,brave,uplifting|4_Solemn_Vow-a.mp3
3|March of Faith|f|music,brooding,dark,sad|3_The_March_of_the_Faithful.mp3
2|Bubbling Pools|nf|bubbles,music,ethereal,mystical
1|The Inner Core|smA|deep,technology,alien,computers`;
  const mus = TTA.split('\n').map(l => {
    const [k, title, gt, tags, file] = l.split('|');
    const key = +k, genres = gt.replace(/[MA]/g, ''), type = gt.includes('M') ? 'musica' : gt.includes('A') ? 'ambiente' : 'ambos';
    const f = file || (key + '_' + title.replace(/[^A-Za-z0-9 ]/g, '').replace(/ +/g, '_') + '.mp3');
    return {
      id: 'tta' + key, key, name: title, genres, type, tags: tags || '', loop: true,
      url: 'https://sounds.tabletopaudio.com/' + f, page: 'https://tabletopaudio.com/', license: 'by-nc-nd', source: 'Tabletop Audio',
      credit: '"' + title + '" por Tabletop Audio (tabletopaudio.com), licença CC BY-NC-ND 4.0'
    };
  });
  const GENRES = [['f', 'Fantasia'], ['h', 'Terror'], ['i', 'Histórico'], ['n', 'Natureza'], ['s', 'Ficção científica'], ['m', 'Moderno']];
  // atalhos em português para buscar nas músicas (pesquisam pelas tags em inglês)
  const MUS_QUICK = [['Taverna', 'tavern inn pub'], ['Floresta', 'forest woods'], ['Masmorra', 'dungeon crypt tomb'], ['Caverna', 'cave cavern underdark'], ['Cidade', 'city town village'], ['Batalha', 'battle war combat'], ['Assombrado', 'haunted ghosts spooky scary'], ['Castelo', 'castle palace royalty'], ['Templo', 'temple church cathedral ritual'], ['Mar', 'ocean sea ship sailing'], ['Neve', 'snow ice winter frozen'], ['Deserto', 'desert sand'], ['Pântano', 'swamp marsh bog'], ['Magia', 'magic spells wizards'], ['Dragão', 'dragon'], ['Vampiro', 'vampire dracula strahd'], ['Calmo', 'peaceful calm quiet'], ['Viagem', 'journey travel road carriage']];
  window.ACERVO = { fx, mus, FX_CATS, GENRES, MUS_QUICK };
})();
