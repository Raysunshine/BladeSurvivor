(function () {
  const sample = (files, volume = 0.5, rate = [0.97, 1.03]) => ({
    files: files.map((file) => `./assets/audio/sample/${file}`),
    volume,
    rate,
  });
  const pixel = (files, volume = 0.2, rate = [0.98, 1.02]) => ({
    files: files.map((file) => `./assets/audio/pixel/${file}`),
    volume,
    rate,
  });
  const preset = (name, description, sampleLayers, pixelLayers, sources) => ({
    name,
    description,
    sample: sampleLayers,
    pixel: pixelLayers,
    sources,
  });

  window.SFX_AUDITION_MANIFEST = {
    version: 1,
    sources: {
      sword20: {
        short: "StarNinjas 刀剑包",
        author: "StarNinjas",
        license: "CC0",
        url: "https://opengameart.org/content/20-sword-sound-effects-attacks-and-clashes",
      },
      swishes: {
        short: "Swishes 破风包",
        author: "artisticdude",
        license: "CC0",
        url: "https://opengameart.org/content/swishes-sound-pack",
      },
      kenneyRpg: {
        short: "Kenney RPG Audio",
        author: "Kenney",
        license: "CC0",
        url: "https://kenney.nl/assets/rpg-audio",
      },
      kenneyImpact: {
        short: "Kenney Impact Sounds",
        author: "Kenney",
        license: "CC0",
        url: "https://kenney.nl/assets/impact-sounds",
      },
      retro512: {
        short: "512 Retro SFX",
        author: "Juhani Junkala / SubspaceAudio",
        license: "CC0",
        url: "https://opengameart.org/content/512-sound-effects-8-bit-style",
      },
      fleshy: {
        short: "Fleshy Fight Sounds",
        author: "Will Leamon",
        license: "OGA-BY 3.0",
        url: "https://opengameart.org/content/fleshy-fight-sounds",
      },
    },
    groups: [
      {
        id: "characters",
        name: "角色命中",
        events: [
          {
            id: "xuanren_normal",
            name: "玄刃 · 普通命中",
            detail: "均衡、清晰，中速刀刃",
            choices: {
              A: preset("平衡斩击", "破风与肉体切入并重", [sample(["swish_10.wav", "swish_11.wav"], 0.34), sample(["flesh_sword_01.wav", "flesh_sword_02.wav"], 0.52)], [pixel(["melee_sword_01.wav", "melee_sword_02.wav"], 0.16)], ["swishes", "fleshy", "retro512"]),
              B: preset("清脆刀锋", "更短、更亮、收尾利落", [sample(["rpg_knife_slice_01.wav", "rpg_knife_slice_02.wav"], 0.58)], [pixel(["melee_dagger.wav", "impact_02.wav"], 0.22)], ["kenneyRpg", "retro512"]),
              C: preset("厚实切入", "低频冲击更明显", [sample(["swish_05.wav", "swish_06.wav"], 0.32), sample(["flesh_sword_03.wav", "flesh_sword_04.wav"], 0.58)], [pixel(["impact_04.wav", "impact_09.wav"], 0.15)], ["swishes", "fleshy", "retro512"]),
            },
          },
          {
            id: "xuanren_crit",
            name: "玄刃 · 暴击",
            detail: "在普通斩击之上形成明确奖励",
            choices: {
              A: preset("亮锋暴击", "金属亮点加短爆发", [sample(["sword_attack_03.wav", "sword_attack_07.wav"], 0.56), sample(["kenney_metal_medium_02.wav", "kenney_metal_medium_04.wav"], 0.38)], [pixel(["explosion_hard_02.wav", "explosion_hard_05.wav"], 0.2)], ["sword20", "kenneyImpact", "retro512"]),
              B: preset("极速断响", "高频、短尾、穿透感强", [sample(["sword_attack_02.wav", "sword_attack_05.wav"], 0.58)], [pixel(["melee_sword_03.wav", "impact_12.wav"], 0.26)], ["sword20", "retro512"]),
              C: preset("重斩暴击", "更宽、更沉的终结感", [sample(["swish_07.wav", "swish_09.wav"], 0.34), sample(["flesh_sword_03.wav", "kenney_punch_heavy_03.wav"], 0.62)], [pixel(["explosion_heavy_01.wav", "explosion_heavy_03.wav"], 0.18)], ["swishes", "fleshy", "kenneyImpact", "retro512"]),
            },
          },
          {
            id: "yingren_normal",
            name: "影刃 · 普通命中",
            detail: "快速、尖锐、短促",
            choices: {
              A: preset("轻刺", "轻破风加穿刺触点", [sample(["swish_12.wav", "swish_13.wav"], 0.36), sample(["flesh_pierce_01.wav", "flesh_pierce_02.wav"], 0.46)], [pixel(["melee_dagger.wav"], 0.2)], ["swishes", "fleshy", "retro512"]),
              B: preset("像素快刀", "最短、最亮、街机感最强", [sample(["rpg_knife_slice_01.wav", "rpg_knife_slice_02.wav"], 0.5, [1.05, 1.1])], [pixel(["impact_01.wav", "impact_06.wav"], 0.26, [1.03, 1.08])], ["kenneyRpg", "retro512"]),
              C: preset("暗影切割", "略低沉但仍保持速度", [sample(["sword_attack_01.wav", "sword_attack_04.wav"], 0.52), sample(["flesh_pierce_03.wav", "flesh_pierce_04.wav"], 0.4)], [pixel(["damage_02.wav", "damage_07.wav"], 0.18)], ["sword20", "fleshy", "retro512"]),
            },
          },
          {
            id: "yingren_crit",
            name: "影刃 · 暴击",
            detail: "快速上扬的致命反馈",
            choices: {
              A: preset("穿心", "锐利穿刺加明亮爆点", [sample(["flesh_pierce_03.wav", "flesh_pierce_04.wav"], 0.58)], [pixel(["explosion_hard_06.wav", "explosion_hard_09.wav"], 0.24, [1.05, 1.12])], ["fleshy", "retro512"]),
              B: preset("闪光暴击", "极短高频，适合连击", [sample(["sword_attack_05.wav", "sword_attack_09.wav"], 0.56, [1.06, 1.12])], [pixel(["impact_10.wav", "impact_15.wav"], 0.28, [1.05, 1.1])], ["sword20", "retro512"]),
              C: preset("裂影", "切割感和低频奖励并存", [sample(["swish_03.wav", "swish_04.wav"], 0.34), sample(["flesh_sword_01.wav", "flesh_sword_02.wav"], 0.54)], [pixel(["explosion_hard_01.wav", "explosion_hard_04.wav"], 0.2)], ["swishes", "fleshy", "retro512"]),
            },
          },
          {
            id: "zhenyue_normal",
            name: "镇岳 · 普通命中",
            detail: "厚重、低沉、宽阔",
            choices: {
              A: preset("重刃落点", "重破风加钝重肉体冲击", [sample(["swish_07.wav", "swish_09.wav"], 0.38), sample(["flesh_hammer_01.wav", "flesh_hammer_02.wav"], 0.62)], [pixel(["melee_punch_03.wav", "melee_punch_04.wav"], 0.16)], ["swishes", "fleshy", "retro512"]),
              B: preset("金属巨刃", "更硬、更像重型兵器", [sample(["kenney_metal_heavy_01.wav", "kenney_metal_heavy_03.wav"], 0.62), sample(["rpg_chop.wav"], 0.32)], [pixel(["impact_04.wav", "impact_14.wav"], 0.18)], ["kenneyImpact", "kenneyRpg", "retro512"]),
              C: preset("震地", "最强低频与街机爆点", [sample(["kenney_punch_heavy_02.wav", "kenney_punch_heavy_04.wav"], 0.68)], [pixel(["explosion_hard_03.wav", "explosion_hard_08.wav"], 0.22, [0.9, 0.96])], ["kenneyImpact", "retro512"]),
            },
          },
          {
            id: "zhenyue_crit",
            name: "镇岳 · 暴击",
            detail: "重武器终结与震荡",
            choices: {
              A: preset("崩山", "三层式重击，最有终结感", [sample(["swish_07.wav", "swish_09.wav"], 0.36), sample(["flesh_hammer_03.wav", "flesh_hammer_04.wav"], 0.66)], [pixel(["explosion_heavy_02.wav", "explosion_heavy_04.wav"], 0.24)], ["swishes", "fleshy", "retro512"]),
              B: preset("金铁震鸣", "金属共振突出", [sample(["kenney_bell_heavy_02.wav", "kenney_bell_heavy_04.wav"], 0.5), sample(["kenney_metal_heavy_02.wav", "kenney_metal_heavy_05.wav"], 0.58)], [pixel(["impact_08.wav", "impact_13.wav"], 0.18)], ["kenneyImpact", "retro512"]),
              C: preset("像素重爆", "街机化最强，尾音最短", [sample(["kenney_punch_heavy_01.wav", "kenney_punch_heavy_05.wav"], 0.7)], [pixel(["explosion_heavy_01.wav", "explosion_heavy_05.wav"], 0.3, [0.9, 0.98])], ["kenneyImpact", "retro512"]),
            },
          },
        ],
      },
      {
        id: "defense",
        name: "受击与防御",
        events: [
          {
            id: "player_hurt",
            name: "玩家受伤",
            detail: "短促警示，不遮盖战斗",
            choices: {
              A: preset("肉体受击", "自然冲击加像素警示", [sample(["flesh_punch_01.wav", "flesh_punch_02.wav"], 0.5)], [pixel(["damage_03.wav", "damage_06.wav"], 0.24)], ["fleshy", "retro512"]),
              B: preset("街机受伤", "清晰、明亮、辨识度高", [sample(["kenney_punch_medium_01.wav", "kenney_punch_medium_04.wav"], 0.46)], [pixel(["damage_01.wav", "damage_09.wav"], 0.3)], ["kenneyImpact", "retro512"]),
              C: preset("重创", "低频更重，危险感更强", [sample(["flesh_punch_03.wav", "flesh_punch_04.wav"], 0.58)], [pixel(["explosion_hard_07.wav", "damage_10.wav"], 0.22, [0.9, 0.96])], ["fleshy", "retro512"]),
            },
          },
          {
            id: "xuanjia_block",
            name: "玄甲格挡",
            detail: "金属碰撞与成功防御确认",
            choices: {
              A: preset("刀甲相撞", "清晰金属碰撞", [sample(["sword_clash_02.wav", "sword_clash_05.wav", "sword_clash_08.wav"], 0.62)], [pixel(["impact_05.wav", "impact_11.wav"], 0.18)], ["sword20", "retro512"]),
              B: preset("清脆招架", "更短、更明亮", [sample(["kenney_metal_light_02.wav", "kenney_metal_light_04.wav"], 0.62)], [pixel(["melee_sword_02.wav"], 0.22)], ["kenneyImpact", "retro512"]),
              C: preset("重甲格挡", "更厚、更低沉", [sample(["sword_clash_06.wav", "sword_clash_10.wav"], 0.58), sample(["kenney_metal_heavy_02.wav", "kenney_metal_heavy_04.wav"], 0.4)], [pixel(["impact_14.wav"], 0.16)], ["sword20", "kenneyImpact", "retro512"]),
            },
          },
          {
            id: "guardian_blast",
            name: "金钟护盾爆破",
            detail: "防御反击与范围震荡",
            choices: {
              A: preset("钟鸣震荡", "钟体共振加短爆发", [sample(["kenney_bell_heavy_01.wav", "kenney_bell_heavy_03.wav"], 0.58), sample(["kenney_punch_heavy_02.wav"], 0.38)], [pixel(["explosion_heavy_02.wav"], 0.24)], ["kenneyImpact", "retro512"]),
              B: preset("像素金钟", "更亮、更像技能确认", [sample(["kenney_bell_heavy_04.wav", "kenney_bell_heavy_05.wav"], 0.52)], [pixel(["impact_10.wav", "explosion_hard_06.wav"], 0.3)], ["kenneyImpact", "retro512"]),
              C: preset("低频护爆", "冲击最大、共振较短", [sample(["kenney_punch_heavy_03.wav", "kenney_punch_heavy_05.wav"], 0.68)], [pixel(["explosion_heavy_03.wav", "explosion_heavy_05.wav"], 0.26, [0.88, 0.95])], ["kenneyImpact", "retro512"]),
            },
          },
        ],
      },
      {
        id: "skills",
        name: "刀气与技能",
        events: [
          {
            id: "moon_wave_swing",
            name: "圆月刀气 · 挥刀",
            detail: "弹体出现前的蓄势破风",
            choices: {
              A: preset("圆弧破风", "中等宽度、动作清楚", [sample(["swish_02.wav", "swish_03.wav"], 0.54)], [pixel(["melee_sword_01.wav"], 0.14)], ["swishes", "retro512"]),
              B: preset("高速挥刀", "轻、快、上扬", [sample(["swish_12.wav", "swish_13.wav"], 0.6, [1.04, 1.1])], [pixel(["melee_dagger.wav"], 0.2)], ["swishes", "retro512"]),
              C: preset("重弧挥斩", "更宽、更沉", [sample(["swish_07.wav", "swish_09.wav"], 0.58, [0.9, 0.97])], [pixel(["impact_04.wav"], 0.13)], ["swishes", "retro512"]),
            },
          },
          {
            id: "moon_wave_release",
            name: "圆月刀气 · 释放",
            detail: "刀气弹体离手",
            choices: {
              A: preset("锋芒离体", "刀锋加短能量尾", [sample(["sword_attack_03.wav", "sword_attack_06.wav"], 0.52)], [pixel(["laser_01.wav", "laser_02.wav"], 0.2)], ["sword20", "retro512"]),
              B: preset("像素刀波", "电子感更强、速度更快", [sample(["rpg_knife_slice_01.wav", "rpg_knife_slice_02.wav"], 0.42)], [pixel(["laser_03.wav", "laser_05.wav"], 0.3, [1.05, 1.12])], ["kenneyRpg", "retro512"]),
              C: preset("厚重月牙", "发射感更宽", [sample(["swish_05.wav", "swish_06.wav"], 0.48)], [pixel(["laser_04.wav", "impact_13.wav"], 0.22, [0.92, 0.98])], ["swishes", "retro512"]),
            },
          },
          {
            id: "flying_blade",
            name: "自动飞刃",
            detail: "高频发射，必须短而轻",
            choices: {
              A: preset("轻刃飞出", "真实刀锋与轻电子尾", [sample(["rpg_draw_knife_01.wav", "rpg_draw_knife_02.wav", "rpg_draw_knife_03.wav"], 0.42)], [pixel(["laser_01.wav", "laser_06.wav"], 0.17)], ["kenneyRpg", "retro512"]),
              B: preset("街机飞刀", "最短、最亮", [sample(["rpg_knife_slice_01.wav", "rpg_knife_slice_02.wav"], 0.36, [1.08, 1.14])], [pixel(["melee_dagger.wav"], 0.25, [1.06, 1.12])], ["kenneyRpg", "retro512"]),
              C: preset("暗刃投射", "稍低沉，不抢普通命中", [sample(["sword_attack_08.wav", "sword_attack_10.wav"], 0.38, [0.93, 0.98])], [pixel(["laser_02.wav", "laser_04.wav"], 0.14, [0.9, 0.96])], ["sword20", "retro512"]),
            },
          },
          {
            id: "giant_blade",
            name: "修罗巨刃",
            detail: "重技能，必须压过普通命中",
            choices: {
              A: preset("巨刃横扫", "重破风、肉体冲击、像素爆点", [sample(["swish_07.wav", "swish_09.wav"], 0.5), sample(["flesh_hammer_03.wav", "flesh_hammer_04.wav"], 0.64)], [pixel(["explosion_heavy_01.wav", "explosion_heavy_04.wav"], 0.28)], ["swishes", "fleshy", "retro512"]),
              B: preset("金属修罗", "金属质感和锋利度更强", [sample(["sword_attack_06.wav", "sword_attack_10.wav"], 0.54), sample(["kenney_metal_heavy_01.wav", "kenney_metal_heavy_05.wav"], 0.54)], [pixel(["impact_15.wav", "explosion_hard_10.wav"], 0.24)], ["sword20", "kenneyImpact", "retro512"]),
              C: preset("崩裂巨刃", "低频最大，最夸张", [sample(["kenney_punch_heavy_03.wav", "kenney_punch_heavy_05.wav"], 0.72), sample(["swish_09.wav"], 0.36, [0.86, 0.92])], [pixel(["explosion_heavy_03.wav", "explosion_heavy_05.wav"], 0.32, [0.86, 0.93])], ["kenneyImpact", "swishes", "retro512"]),
            },
          },
        ],
      },
      {
        id: "entrances",
        name: "强敌登场",
        events: [
          {
            id: "boss_spawn",
            name: "最终 Boss 登场",
            detail: "低频警告与战斗阶段切换",
            choices: {
              A: preset("血月降临", "钟鸣与低频爆发", [sample(["kenney_bell_heavy_02.wav", "kenney_bell_heavy_04.wav"], 0.55), sample(["kenney_punch_heavy_04.wav"], 0.6)], [pixel(["explosion_heavy_02.wav", "explosion_heavy_05.wav"], 0.28, [0.82, 0.9])], ["kenneyImpact", "retro512"]),
              B: preset("街机警报", "清晰、短促、电子感强", [sample(["kenney_metal_heavy_03.wav"], 0.5)], [pixel(["explosion_heavy_01.wav", "impact_15.wav"], 0.38, [0.9, 0.98])], ["kenneyImpact", "retro512"]),
              C: preset("巨物落地", "最沉重、最具压迫感", [sample(["kenney_punch_heavy_02.wav", "kenney_punch_heavy_05.wav"], 0.74)], [pixel(["explosion_heavy_03.wav", "explosion_heavy_04.wav"], 0.32, [0.78, 0.86])], ["kenneyImpact", "retro512"]),
            },
          },
          {
            id: "guardian_spawn",
            name: "镇守者登场",
            detail: "精英级威胁提示",
            choices: {
              A: preset("铠甲镇守", "金属落点加短爆发", [sample(["kenney_metal_heavy_02.wav", "kenney_metal_heavy_04.wav"], 0.6)], [pixel(["explosion_hard_03.wav", "explosion_hard_08.wav"], 0.26)], ["kenneyImpact", "retro512"]),
              B: preset("快速警示", "更亮、更短，不打断战斗", [sample(["kenney_bell_heavy_01.wav", "kenney_bell_heavy_05.wav"], 0.48)], [pixel(["impact_10.wav", "impact_12.wav"], 0.3)], ["kenneyImpact", "retro512"]),
              C: preset("重甲落地", "更低沉、更有重量", [sample(["kenney_punch_heavy_01.wav", "kenney_punch_heavy_03.wav"], 0.68)], [pixel(["explosion_heavy_01.wav", "explosion_heavy_04.wav"], 0.25, [0.86, 0.93])], ["kenneyImpact", "retro512"]),
            },
          },
        ],
      },
    ],
  };
})();
