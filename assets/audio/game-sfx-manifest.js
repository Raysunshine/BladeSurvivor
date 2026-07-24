(function () {
  const audioPath = (type, file) => `./assets/audio/${type}/${file}`;
  const layer = (type, files, volume, rate = [0.97, 1.03]) => ({
    files: files.map((file) => audioPath(type, file)),
    volume,
    rate,
  });
  const sample = (files, volume, rate) => layer("sample", files, volume, rate);
  const pixel = (files, volume, rate) => layer("pixel", files, volume, rate);
  const effect = (priority, cooldown, sampleLayers, pixelLayers) => ({
    priority,
    cooldown,
    layers: [...sampleLayers, ...pixelLayers],
  });

  const manifest = {
    xuanren_normal: effect(1, 85, [
      sample(["swish_10.wav", "swish_11.wav"], 0.34),
      sample(["flesh_sword_01.wav", "flesh_sword_02.wav"], 0.52),
    ], [pixel(["melee_sword_01.wav", "melee_sword_02.wav"], 0.16)]),
    xuanren_crit: effect(2, 40, [
      sample(["swish_07.wav", "swish_09.wav"], 0.34),
      sample(["flesh_sword_03.wav", "kenney_punch_heavy_03.wav"], 0.62),
    ], [pixel(["explosion_heavy_01.wav", "explosion_heavy_03.wav"], 0.18)]),
    yingren_normal: effect(1, 85, [
      sample(["sword_attack_01.wav", "sword_attack_04.wav"], 0.52),
      sample(["flesh_pierce_03.wav", "flesh_pierce_04.wav"], 0.4),
    ], [pixel(["damage_02.wav", "damage_07.wav"], 0.18)]),
    yingren_crit: effect(2, 40, [
      sample(["sword_attack_05.wav", "sword_attack_09.wav"], 0.56, [1.06, 1.12]),
    ], [pixel(["impact_10.wav", "impact_15.wav"], 0.28, [1.05, 1.1])]),
    zhenyue_normal: effect(1, 85, [
      sample(["swish_07.wav", "swish_09.wav"], 0.38),
      sample(["flesh_hammer_01.wav", "flesh_hammer_02.wav"], 0.62),
    ], [pixel(["melee_punch_03.wav", "melee_punch_04.wav"], 0.16)]),
    zhenyue_crit: effect(2, 40, [
      sample(["kenney_punch_heavy_01.wav", "kenney_punch_heavy_05.wav"], 0.7),
    ], [pixel(["explosion_heavy_01.wav", "explosion_heavy_05.wav"], 0.3, [0.9, 0.98])]),
    player_hurt: effect(3, 120, [
      sample(["kenney_punch_medium_01.wav", "kenney_punch_medium_04.wav"], 0.46),
    ], [pixel(["damage_01.wav", "damage_09.wav"], 0.3)]),
    xuanjia_block: effect(3, 80, [
      sample(["kenney_metal_light_02.wav", "kenney_metal_light_04.wav"], 0.62),
    ], [pixel(["melee_sword_02.wav"], 0.22)]),
    guardian_blast: effect(3, 150, [
      sample(["kenney_bell_heavy_01.wav", "kenney_bell_heavy_03.wav"], 0.58),
      sample(["kenney_punch_heavy_02.wav"], 0.38),
    ], [pixel(["explosion_heavy_02.wav"], 0.24)]),
    powder_cart_explosion: effect(3, 250, [
      sample(["kenney_punch_heavy_02.wav", "kenney_punch_heavy_05.wav"], 0.76, [0.84, 0.92]),
    ], [pixel(["explosion_heavy_03.wav", "explosion_heavy_05.wav"], 0.42, [0.8, 0.9])]),
    war_banner_activate: effect(3, 500, [
      sample(["kenney_bell_heavy_01.wav", "kenney_bell_heavy_03.wav"], 0.58),
    ], [pixel(["explosion_hard_02.wav"], 0.22)]),
    war_banner_aura: effect(1, 1800, [
      sample(["kenney_bell_heavy_05.wav"], 0.18),
    ], []),
    crossbow_tower_activate: effect(2, 500, [
      sample(["kenney_metal_heavy_02.wav", "kenney_metal_heavy_04.wav"], 0.55),
    ], [pixel(["impact_08.wav"], 0.18)]),
    powder_cart_activate: effect(2, 400, [
      sample(["kenney_generic_light_01.wav", "kenney_generic_light_03.wav"], 0.38),
    ], [pixel(["impact_03.wav", "impact_04.wav"], 0.16)]),
    antler_fence_hit: effect(1, 120, [
      sample(["rpg_chop.wav"], 0.42),
    ], [pixel(["impact_03.wav", "impact_04.wav"], 0.14)]),
    enemy_camp_hit: effect(1, 160, [
      sample(["kenney_punch_heavy_02.wav", "kenney_punch_heavy_04.wav"], 0.50),
      sample(["rpg_chop.wav"], 0.28),
    ], [pixel(["impact_08.wav"], 0.16)]),
    moon_wave_swing: effect(2, 120, [
      sample(["swish_12.wav", "swish_13.wav"], 0.6, [1.04, 1.1]),
    ], [pixel(["melee_dagger.wav"], 0.2)]),
    moon_wave_release: effect(2, 120, [
      sample(["sword_attack_03.wav", "sword_attack_06.wav"], 0.52),
    ], [pixel(["laser_01.wav", "laser_02.wav"], 0.2)]),
    flying_blade: effect(1, 90, [
      sample(["sword_attack_08.wav", "sword_attack_10.wav"], 0.38, [0.93, 0.98]),
    ], [pixel(["laser_02.wav", "laser_04.wav"], 0.14, [0.9, 0.96])]),
    giant_blade: effect(3, 250, [
      sample(["sword_attack_06.wav", "sword_attack_10.wav"], 0.54),
      sample(["kenney_metal_heavy_01.wav", "kenney_metal_heavy_05.wav"], 0.54),
    ], [pixel(["impact_15.wav", "explosion_hard_10.wav"], 0.24)]),
    boss_spawn: effect(3, 500, [
      sample(["kenney_punch_heavy_02.wav", "kenney_punch_heavy_05.wav"], 0.74),
    ], [pixel(["explosion_heavy_03.wav", "explosion_heavy_04.wav"], 0.32, [0.78, 0.86])]),
    guardian_spawn: effect(3, 400, [
      sample(["kenney_metal_heavy_02.wav", "kenney_metal_heavy_04.wav"], 0.6),
    ], [pixel(["explosion_hard_03.wav", "explosion_hard_08.wav"], 0.26)]),
  };

  function createGameSfxPlayer(options = {}) {
    const getEnabled = options.getEnabled || (() => true);
    const getVolume = options.getVolume || (() => 1);
    const poolSize = 4;
    const pools = new Map();
    const active = new Set();
    const lastPlayed = new Map();
    const eventHistory = [];
    const warned = new Set();

    function randomFrom(items) {
      return items[Math.floor(Math.random() * items.length)];
    }

    function randomRate(range) {
      return range[0] + Math.random() * (range[1] - range[0]);
    }

    function getPool(path) {
      if (!pools.has(path)) {
        const voices = Array.from({ length: poolSize }, () => {
          const audio = new Audio(path);
          audio.preload = "auto";
          audio.addEventListener("ended", () => active.delete(audio));
          audio.addEventListener("error", () => {
            active.delete(audio);
            if (!warned.has(path)) {
              warned.add(path);
              console.warn(`[SFX] 无法加载音频：${path}`);
            }
          });
          return audio;
        });
        pools.set(path, { voices, cursor: 0 });
      }
      return pools.get(path);
    }

    function playLayer(layerConfig) {
      const path = randomFrom(layerConfig.files);
      const pool = getPool(path);
      const audio = pool.voices[pool.cursor++ % pool.voices.length];
      try {
        audio.pause();
        audio.currentTime = 0;
        audio.volume = Math.min(
          1,
          layerConfig.volume * Math.pow(Math.max(0, Math.min(1, getVolume())), 1.1),
        );
        audio.playbackRate = randomRate(layerConfig.rate);
        active.add(audio);
        audio.play()?.catch((error) => {
          active.delete(audio);
          if (error?.name !== "AbortError" && !warned.has(path)) {
            warned.add(path);
            console.warn(`[SFX] 播放失败：${path}`, error);
          }
        });
      } catch (error) {
        active.delete(audio);
        if (!warned.has(path)) {
          warned.add(path);
          console.warn(`[SFX] 播放失败：${path}`, error);
        }
      }
    }

    function canPlay(id, config, now) {
      if (!getEnabled() || document.hidden) return false;
      if (now - (lastPlayed.get(id) || -Infinity) < config.cooldown) return false;
      while (eventHistory.length && now - eventHistory[0].time >= 1000) eventHistory.shift();
      const normalCount = eventHistory.filter((event) => event.priority <= 1).length;
      if (config.priority <= 1 && normalCount >= 12) return false;
      if (config.priority < 3 && eventHistory.length >= 20) return false;
      return true;
    }

    return {
      play(id) {
        const config = manifest[id];
        if (!config) return false;
        const now = performance.now();
        if (!canPlay(id, config, now)) return false;
        lastPlayed.set(id, now);
        eventHistory.push({ time: now, priority: config.priority });
        config.layers.forEach(playLayer);
        return true;
      },
      preload() {
        const paths = new Set();
        Object.values(manifest).forEach((config) => {
          config.layers.forEach((layerConfig) => layerConfig.files.forEach((path) => paths.add(path)));
        });
        paths.forEach(getPool);
      },
      stopAll() {
        active.forEach((audio) => {
          audio.pause();
          audio.currentTime = 0;
        });
        active.clear();
      },
      getState() {
        return {
          effects: Object.keys(manifest).length,
          pools: pools.size,
          active: active.size,
          warned: warned.size,
        };
      },
    };
  }

  window.GAME_SFX_MANIFEST = manifest;
  window.createGameSfxPlayer = createGameSfxPlayer;
})();
