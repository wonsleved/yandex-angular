export interface ContentInfo {
  channelInfo: ChannelInfo;
  videoInfo: VideoInfo;
}

export interface ChannelInfo {
  link: string;
  name: string;
  subscribersAmount: number;
  iconClass: string;
}

export interface VideoInfo {
  link: string;
  type: string;
  title: string;
  posterLink: string;
  publishDate: string;
  views: string;
  commentsAmount: number;
}
