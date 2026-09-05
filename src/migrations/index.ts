import * as migration_20260803_075626_initial from './20260803_075626_initial';
import * as migration_20260803_075648_seed_current_content from './20260803_075648_seed_current_content';
import * as migration_20260803_133319_add_embassies from './20260803_133319_add_embassies';
import * as migration_20260803_133320_seed_embassies from './20260803_133320_seed_embassies';
import * as migration_20260803_150000_add_embassy_addresses from './20260803_150000_add_embassy_addresses';
import * as migration_20260803_160742_add_media_prefix from './20260803_160742_add_media_prefix';
import * as migration_20260803_200449_add_members from './20260803_200449_add_members';
import * as migration_20260807_100000_seed_original_guides from './20260807_100000_seed_original_guides';
import * as migration_20260807_130000_refresh_original_guides from './20260807_130000_refresh_original_guides';
import * as migration_20260812_120000_add_directory_opt_ins from './20260812_120000_add_directory_opt_ins';
import * as migration_20260813_100000_add_admin_content from './20260813_100000_add_admin_content';
import * as migration_20260813_100001_seed_admin_content from './20260813_100001_seed_admin_content';
import * as migration_20260824_170000_add_news_stories from './20260824_170000_add_news_stories';
import * as migration_20260824_170001_seed_news_stories from './20260824_170001_seed_news_stories';
import * as migration_20260824_181000_seed_news_stories_batch_two from './20260824_181000_seed_news_stories_batch_two';
import * as migration_20260827_140000_seed_approved_businesses from './20260827_140000_seed_approved_businesses';
import * as migration_20260827_153000_seed_news_stories_batch_three from './20260827_153000_seed_news_stories_batch_three';
import * as migration_20260827_160000_add_saved_articles from './20260827_160000_add_saved_articles';
import * as migration_20260827_180000_add_member_account_features from './20260827_180000_add_member_account_features';
import * as migration_20260827_200000_add_business_moderation from './20260827_200000_add_business_moderation';
import * as migration_20260827_210000_add_community_board from './20260827_210000_add_community_board';
import * as migration_20260828_131500_seed_news_stories_batch_four from './20260828_131500_seed_news_stories_batch_four';
import * as migration_20260831_070000_publish_english_lukio_and_update_economy from './20260831_070000_publish_english_lukio_and_update_economy';
import * as migration_20260901_060000_harden_community_board from './20260901_060000_harden_community_board';
import * as migration_20260901_080000_add_anonymous_community_posts from './20260901_080000_add_anonymous_community_posts';
import * as migration_20260902_120000_publish_connect_fit from './20260902_120000_publish_connect_fit';
import * as migration_20260904_090000_publish_inka_roastery from './20260904_090000_publish_inka_roastery';
import * as migration_20260904_150000_seed_news_stories_batch_five from './20260904_150000_seed_news_stories_batch_five';
import * as migration_20260905_080000_publish_byrne_carpentry from './20260905_080000_publish_byrne_carpentry';
import * as migration_20260905_133000_add_home_chef_mark_images from './20260905_133000_add_home_chef_mark_images';
import * as migration_20260905_143000_add_alstudio_image from './20260905_143000_add_alstudio_image';
import * as migration_20260905_150000_replace_alstudio_image from './20260905_150000_replace_alstudio_image';

export const migrations = [
  {
    up: migration_20260803_075626_initial.up,
    down: migration_20260803_075626_initial.down,
    name: '20260803_075626_initial',
  },
  {
    up: migration_20260803_075648_seed_current_content.up,
    down: migration_20260803_075648_seed_current_content.down,
    name: '20260803_075648_seed_current_content',
  },
  {
    up: migration_20260803_133319_add_embassies.up,
    down: migration_20260803_133319_add_embassies.down,
    name: '20260803_133319_add_embassies',
  },
  {
    up: migration_20260803_133320_seed_embassies.up,
    down: migration_20260803_133320_seed_embassies.down,
    name: '20260803_133320_seed_embassies',
  },
  {
    up: migration_20260803_150000_add_embassy_addresses.up,
    down: migration_20260803_150000_add_embassy_addresses.down,
    name: '20260803_150000_add_embassy_addresses',
  },
  {
    up: migration_20260803_160742_add_media_prefix.up,
    down: migration_20260803_160742_add_media_prefix.down,
    name: '20260803_160742_add_media_prefix',
  },
  {
    up: migration_20260803_200449_add_members.up,
    down: migration_20260803_200449_add_members.down,
    name: '20260803_200449_add_members'
  },
  {
    up: migration_20260807_100000_seed_original_guides.up,
    down: migration_20260807_100000_seed_original_guides.down,
    name: '20260807_100000_seed_original_guides'
  },
  {
    up: migration_20260807_130000_refresh_original_guides.up,
    down: migration_20260807_130000_refresh_original_guides.down,
    name: '20260807_130000_refresh_original_guides'
  },
  {
    up: migration_20260812_120000_add_directory_opt_ins.up,
    down: migration_20260812_120000_add_directory_opt_ins.down,
    name: '20260812_120000_add_directory_opt_ins',
  },
  {
    up: migration_20260813_100000_add_admin_content.up,
    down: migration_20260813_100000_add_admin_content.down,
    name: '20260813_100000_add_admin_content',
  },
  {
    up: migration_20260813_100001_seed_admin_content.up,
    down: migration_20260813_100001_seed_admin_content.down,
    name: '20260813_100001_seed_admin_content',
  },
  {
    up: migration_20260824_170000_add_news_stories.up,
    down: migration_20260824_170000_add_news_stories.down,
    name: '20260824_170000_add_news_stories',
  },
  {
    up: migration_20260824_170001_seed_news_stories.up,
    down: migration_20260824_170001_seed_news_stories.down,
    name: '20260824_170001_seed_news_stories',
  },
  {
    up: migration_20260824_181000_seed_news_stories_batch_two.up,
    down: migration_20260824_181000_seed_news_stories_batch_two.down,
    name: '20260824_181000_seed_news_stories_batch_two',
  },
  {
    up: migration_20260827_140000_seed_approved_businesses.up,
    down: migration_20260827_140000_seed_approved_businesses.down,
    name: '20260827_140000_seed_approved_businesses',
  },
  {
    up: migration_20260827_153000_seed_news_stories_batch_three.up,
    down: migration_20260827_153000_seed_news_stories_batch_three.down,
    name: '20260827_153000_seed_news_stories_batch_three',
  },
  {
    up: migration_20260827_160000_add_saved_articles.up,
    down: migration_20260827_160000_add_saved_articles.down,
    name: '20260827_160000_add_saved_articles',
  },
  {
    up: migration_20260827_180000_add_member_account_features.up,
    down: migration_20260827_180000_add_member_account_features.down,
    name: '20260827_180000_add_member_account_features',
  },
  {
    up: migration_20260827_200000_add_business_moderation.up,
    down: migration_20260827_200000_add_business_moderation.down,
    name: '20260827_200000_add_business_moderation',
  },
  {
    up: migration_20260827_210000_add_community_board.up,
    down: migration_20260827_210000_add_community_board.down,
    name: '20260827_210000_add_community_board',
  },
  {
    up: migration_20260828_131500_seed_news_stories_batch_four.up,
    down: migration_20260828_131500_seed_news_stories_batch_four.down,
    name: '20260828_131500_seed_news_stories_batch_four',
  },
  {
    up: migration_20260831_070000_publish_english_lukio_and_update_economy.up,
    down: migration_20260831_070000_publish_english_lukio_and_update_economy.down,
    name: '20260831_070000_publish_english_lukio_and_update_economy',
  },
  {
    up: migration_20260901_060000_harden_community_board.up,
    down: migration_20260901_060000_harden_community_board.down,
    name: '20260901_060000_harden_community_board',
  },
  {
    up: migration_20260901_080000_add_anonymous_community_posts.up,
    down: migration_20260901_080000_add_anonymous_community_posts.down,
    name: '20260901_080000_add_anonymous_community_posts',
  },
  {
    up: migration_20260902_120000_publish_connect_fit.up,
    down: migration_20260902_120000_publish_connect_fit.down,
    name: '20260902_120000_publish_connect_fit',
  },
  {
    up: migration_20260904_090000_publish_inka_roastery.up,
    down: migration_20260904_090000_publish_inka_roastery.down,
    name: '20260904_090000_publish_inka_roastery',
  },
  {
    up: migration_20260904_150000_seed_news_stories_batch_five.up,
    down: migration_20260904_150000_seed_news_stories_batch_five.down,
    name: '20260904_150000_seed_news_stories_batch_five',
  },
  {
    up: migration_20260905_080000_publish_byrne_carpentry.up,
    down: migration_20260905_080000_publish_byrne_carpentry.down,
    name: '20260905_080000_publish_byrne_carpentry',
  },
  {
    up: migration_20260905_133000_add_home_chef_mark_images.up,
    down: migration_20260905_133000_add_home_chef_mark_images.down,
    name: '20260905_133000_add_home_chef_mark_images',
  },
  {
    up: migration_20260905_143000_add_alstudio_image.up,
    down: migration_20260905_143000_add_alstudio_image.down,
    name: '20260905_143000_add_alstudio_image',
  },
  {
    up: migration_20260905_150000_replace_alstudio_image.up,
    down: migration_20260905_150000_replace_alstudio_image.down,
    name: '20260905_150000_replace_alstudio_image',
  },
];
