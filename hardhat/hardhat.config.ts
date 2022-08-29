import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
// require("dotenv").config({ path: ".env" });
import * as dotenv from "dotenv";

dotenv.config();


const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: ALCHEMY_API_KEY_URL,
      //@ts-ignore
      accounts: [RINKEBY_PRIVATE_KEY],
    },
  },
};

export default config;
