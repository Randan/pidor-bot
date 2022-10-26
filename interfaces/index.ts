export interface IUser {
  tgUserId: number;
  firstName: string;
  lastName?: string;
  userName?: string;
  pidorCount?: number;
}

export interface IGroup {
  tgGroupId: number;
  tournamentParticipants: IUser[];
  lastRoundDate: Date;
}
