export interface ApiResponse {
  ALS: object;
  global: ResGlobalObject;
  realtime: ResRealtimeObject;
  legends: ResLegendsObject;
  total: object;
}

export interface ResGlobalObject {
  arena: {
    rankDiv: number;
    rankImg: string;
    rankName: string;
    rankScore: number;
    rankedSeason: string;
  };
  avatar: null;
  badges: Array<object>;
  bans: {
    isActive: boolean;
    last_banReason: string;
    remainingSeconds: number;
  };
  battlepass: object;
  internalUpdateCount: number;
  level: number;
  levelPrestige: number;
  name: string;
  platform: string;
  rank: {
    rankDiv: number;
    rankImg: string;
    rankName: string;
    rankScore: number;
    rankedSeason: string;
  };
  toNextLevelPercent: number;
  uid: number;
}

export interface GlobalLegendsObject {
  ImgAssets: {
    banner: string;
    icon: string;
  };
  data: [
    {
      name: string;
      value: number;
      key: string;
      rank: {
        rankPos: number;
        topPercent: number;
      };
      rankPlatformSpecific: {
        rankPos: string;
        topPercent: string;
      };
    }
  ];
  gameInfo: {
    badges: [
      {
        name: string;
        value: number;
      }
    ];
  };
}

export interface SelectedLegendObject {
  ImgAssets: {
    banner: string;
    icon: string;
  };
  LegendName: string;
  gameInfo: {
    badges: [
      {
        name: string;
        value: number;
      }
    ];
    frame: string;
    frameRarity: string;
    intro: string;
    introRarity: string;
    pose: string;
    poseRarity: string;
    skin: string;
    skinRarity: string;
  };
}

export interface ResLegendsObject {
  all: GlobalLegendsObject;
  selected: SelectedLegendObject;
}

export interface ResRealtimeObject {
  canJoin: number;
  currentState: string;
  currentStateAsText: string; //May get type errors when receiving these fields
  isInGame: number;
  isOnline: number;
  partyFull: number;
  selectedLegend: string;
  lobbyState: string;
}
