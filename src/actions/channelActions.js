import { Channels } from './constants'

export const fetchChannelsSuccess = (data) => {
  return {
    type: Channels.fetchChannelsSuccess,
    payload: data
  };
}

export const fetchChannels = (data) => {
  return {
    type: Channels.fetchChannels,
    payload: data
  }
}

export const fetchChannelsError = (data) => {
  return {
    type: Channels.fetchChannelsError,
    payload: data
  }
}

