import { LightningElement, api } from "lwc";

/**
 * Show an item
 */
export default class MainSection extends LightningElement {
  myVal = '';
  chat = [
    {
      id: 1,
      avatar: 'https://www.figma.com/file/OiGAuD2vkeWcsaewirtpvd/image/14a8ab5477eda39f45f4745cb8413d5432204a65',
      name: 'Adam Smith',
      message: 'Let’s creat some thing new and attractive and see what people done in our team',
      timestamp: '1621344974000'
    },
    {
      id: 2,
      avatar: 'https://www.figma.com/file/OiGAuD2vkeWcsaewirtpvd/image/df54d336a0e67b8fd4cf4f45f8f71b4391dded2c',
      name: 'Sherley tkashi',
      message: 'Yes , shure ;et’s try something attractive an cool. Yes , shure ;et’s try something attractive an cool.Yes , shure ;et’s try something.',
      timestamp: '1621355774000'
    },
    {
      id: 3,
      avatar: 'https://www.figma.com/file/OiGAuD2vkeWcsaewirtpvd/image/93dd31fe95c17931404727d100c9ea00793025b4',
      name: 'Ayanshi Thakur',
      message: 'Yah already done with my daily task and the other things',
      timestamp: '1621355774000'
    },
  ]
}