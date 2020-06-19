import channel from './channel';
import dayjs from 'dayjs';

export const fetchChannelsAPI=() => {
  const sortedchannels = channel.data.slice().sort((a, b) => dayjs(b.time) - dayjs(a.time));
  const channelGroups = sortedchannels.reduce((channelGroups, game) => {
    const date = dayjs(game.time).format('ddd, MMM DD, YYYY');
    if (!channelGroups[date]) {
      channelGroups[date] = [];
    }
    channelGroups[date].push(game);
    return channelGroups;
  }, {});
  const channelList = Object.keys(channelGroups).map((date) => {
    return {
      date,
      channels: channelGroups[date]
    };
  });
      return channelList;
    };
  