import { ChainTypes } from '@/enums/chains.enums';

export type ValidateWalletAddress = {
    type: ChainTypes;
    valid: boolean;
};

export type BridgeFee = {
    fromToken: string;
    fromChain: string;
    toToken: string;
    toChain: string;
    fee: number;
};
