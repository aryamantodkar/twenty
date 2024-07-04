import { Meta, StoryObj } from '@storybook/react';
import { ComponentDecorator } from 'twenty-ui';

import { SettingsAccountsMessageChannelDetails } from '@/settings/accounts/components/SettingsAccountsMessageChannelDetails';
import { MessageChannelVisibility } from '~/generated/graphql';

const meta: Meta<typeof SettingsAccountsMessageChannelDetails> = {
  title:
    'Modules/Settings/Accounts/MessageChannels/SettingsAccountsMessageChannelDetails',
  component: SettingsAccountsMessageChannelDetails,
  decorators: [ComponentDecorator],
  args: {
    messageChannel: {
      id: '20202020-ef5a-4822-9e08-ce6e6a4dcb6a',
      isContactAutoCreationEnabled: true,
      isSyncEnabled: true,
      visibility: MessageChannelVisibility.ShareEverything,
    },
  },
  argTypes: {
    messageChannel: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof SettingsAccountsMessageChannelDetails>;

export const Default: Story = {
  play: async () => {},
};
