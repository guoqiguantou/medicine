export interface MineProps {
  mine: {
    mineInfo: MineInfoProps,
    globalConfig: GlobalConfigProps,
  },
  dispatch,
  loading,
}

export interface MineInfoProps {
  auntHeadPhoto: string,
  companyId: string,
  contractNum: number,
  id: string,
  inviteNum: number,
  inviteReward: number,
  name: string,
  phone: string,
  serviceOrderNum: number,
  shopId: string,
  shopName: string,
}

export interface GlobalConfigProps {
  addTime: string,
  addUserId: string,
  addUserName: string,
  auntInviteReward: number,
  auntInviteToggle: number,
  cleanOrderPrivacyTime: number,
  cleanOrderPrivacyToggle: number,
  companyId: string,
  id: number,
  shopId: string,
  updateTime: string,
  updateUserId: string,
  updateUserName: string,
}
