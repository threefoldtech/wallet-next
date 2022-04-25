import { NotificationType } from '@/service/notificationService';

type Translation = { [key: string]: string | Translation };
export default <Translation>{
    init: {
        startUpdating: 'Start updating.',
        checkExist: 'Checking if an account already exists.',
        startFirstWallet: 'Initializing first wallet creation.',
        walletCreationFailed: 'Wallet creation failed.',
        noDataYet: 'No data yet',
        isThisFirstTime: 'Is this your first time?',
        loading: 'Loading...',
    },
    component: {
        clipboard: {
            searchPlaceholder: 'Search...',
        },
        operationInfo: {
            title: 'Operation',
            operation: {
                ASSET_ADDED: '{asset} Asset Added',
                ACCOUNT_CREATED: 'Account Created',
            },
        },
    },
    notification: {
        successWalletName: 'Successfully Changed Wallet Name Into {name}',
        notPossible: 'Not Possible at This Time',
        substrateDisconnected: 'Disconnected from TFChain, please try again later.',
    },
    walletList: {
        title: 'My Wallets',
        createInitialWallet: 'Create Initial Wallet',
    },
    walletCard: {
        noBalance: 'No balance found for this wallet',
    },
    walletImport: {
        title: 'Import Wallet',
        tooltip: 'Import Wallet',
        walletName: 'Wallet Name',
        secret: 'Secret',
        addressIndex: 'Address Index',
        CTA: 'Import Wallet',
        advanced: 'Advanced',
        addressIndexInfo: '(Default = 0)',
        error: {
            maximum: 'The maximum length of the name is 50 characters',
            empty: 'The name cannot be empty',
            inUse: 'The name is already in use',
            null: '',
            alphanumeric: 'The name can only contain alphanumeric characters',
        },
    },
    wallet: {
        shell: {
            hint: 'My Wallets',
        },
        overview: {
            assets: 'Assets',
            sendCoins: 'Send Coins',
            receiveCoins: 'Receive Coins',
            transferFromStellar: 'Transfer from Stellar',
            noAssetsFound: 'No Assets Found',
            vestedTokens: 'Vested tokens',
            checkVesting: 'Checking vested tokens...',
            lockedTokens: 'Locked tokens',
            checkLocking: 'Checking locked tokens...',
            lockedTokensDetails: '{amount} {asset_code} will be unlocked on {date}',
            unlockManually: 'Unlock tokens manually',
        },
        transactions: {
            tfchainHistoryBanner: 'Transaction history for TFChain coming soon.',
            filterTitle: 'Filter by currency',
        },
        info: {
            title: 'Wallet Info',
            addressesTitle: 'Addresses',
            secretsTitle: 'Secrets',
            stellarAddress: 'Stellar Address',
            tfChainAddress: 'TFChain Address',
            stellarSecret: 'Stellar Secret',
            tfChainSecret: 'TFChain Secret',
            walletName: 'Wallet Name',
            balance: 'Balance',
            balanceIn: 'Balance in',
            balanceInStellar: 'Balance in Stellar',
            balanceInTFChain: 'Balance in TFChain',
            deleteButton: 'Delete',
        },
    },
    dialog: {
        wallet: {
            changeName: {
                title: 'Change Wallet Name',
                input: 'Please enter the new desired name',
                confirm: 'Change',
                cancel: 'Cancel',
                error: {
                    maximum: 'The maximum length of the name is 50 characters',
                    empty: 'The name cannot be empty',
                    inUse: 'The name is already in use',
                    null: '',
                    alphanumeric: 'The name can only contain alphanumeric characters',
                },
            },
            delete: {
                title: 'Delete Wallet?',
                message: 'Are you sure you want to delete {name}?',
                confirm: 'Delete',
                cancel: 'Cancel',
            },
        },
        deleteWalletDialog: {
            title: 'Delete Wallet',
            enterName: 'Please enter the name of the wallet you want to delete',
            confirm: 'Delete',
        },
        changeWalletName: {
            title: 'Change Wallet Name',
            input: '',
            confirm: 'Change',
            cancel: 'Cancel',
        },
    },
    transfer: {
        send: {
            title: 'Send',
            chain: 'Chain',
            scanQR: 'Scan QR',
            from: 'From',
            to: 'To',
            amount: 'Amount',
            message: 'Message',
            asset: 'Asset',
            fee: 'Fee',
            sendTokensButton: 'Send Tokens',
        },
        confirmSend: {
            title: 'Confirm Send',
            message: 'Confirm your transaction',
            cancel: 'Cancel',
            payWith: 'Pay with',
            to: 'To',
            fee: 'Fee',
            chainNotFound: 'Chain not found',
            confirm: 'Confirm',
            sendingTokens: 'Sending tokens...',
            failedToTransferTokens: 'Failed to transfer tokens',
            successfullyTransferTokens: 'Successfully transferred tokens',
            error: {
                stellarAccountNotFound: 'Destination account not found / not active',
                stellarAssetNotFound: 'Destination account has no trustline for asset {asset}.',
                stellarTargetNoTrustline: 'Destination account has no trustline for asset {asset}.',
            },
        },
        receive: {
            title: 'Receive',
            chain: 'Chain',
            scanQR: 'Scan QR',
            from: 'From',
            to: 'To',
            message: 'Message',
            amount: 'Amount',
            asset: 'Asset',
            fee: 'Fee',
            generateQRButton: 'Generate QR code',
        },
        bridge: {
            title: 'Transfer to TFChain',
            stellarTokens: 'Stellar tokens',
            tfChainTokens: 'TFChain tokens',
            amount: 'Amount',
            confirm: 'Transfer',
            noFunds: 'No funds on this wallet',
            fee: 'Fee',
        },
        confirmBridge: {
            title: 'Confirm Transaction',
            message: 'Confirm your transaction',
            payWith: 'Pay with',
            to: 'To',
            fee: 'Fee',
            confirm: 'Confirm',
            cancel: 'Cancel',
            errorSendTokens: 'Failed to transfer tokens, please contact support',
            usingActivationService: 'Using activation service',
            gettingEntityId: 'Getting entity ID',
            entityIdNotFound: 'Entity not found, creating one',
            transactingTheFunds: 'Transacting the funds',
            transactionDone: 'Transaction done',
            finishingUp: 'Finishing up',
            success: 'Successfully transferred tokens',
            errorCreateEntity: 'Failed to create entity, please contact support',
        },
    },
    chain: {
        stellar: 'Stellar',
        substrate: 'TFChain',
    },
    currency: {
        short: {
            all: 'All',
            ALL: 'All',
            xlm: 'XLM',
            XLM: 'XLM',
            btc: 'BTC',
            BTC: 'BTC',
            tft: 'TFT',
            TFT: 'TFT',
            tfta: 'TFTA',
            TFTA: 'TFTA',
            freeTFT: 'FreeTFT',
            FreeTFT: 'FreeTFT',
            FREETFT: 'FreeTFT',
        },
        long: {
            xlm: 'Stellar Lumens',
            XLM: 'Stellar Lumens',
            btc: 'Bitcoin',
            BTC: 'Bitcoin',
            tft: 'ThreeFold Token',
            TFT: 'ThreeFold Token',
            TFTA: 'ThreeFold Token',
            FreeTFT: 'ThreeFold Token',
        },
    },
    errors: {
        balanceTooLow: 'Balance too low',
        validAmount: 'Transaction amount must be more than 1 TFT',
    },
    contacts: {
        title: 'Contacts',
        dialog: {
            title: 'Add Contact',
            name: 'Name',
            address: 'Address',
            save: 'Add contact',
            cancel: 'Cancel',
            success: 'Successfully saved contact',
            error: {
                maximum: 'There is a maximum character length of 255 characters',
                empty: 'Contact name cannot be empty',
                alphanumeric: 'Only alphanumeric characters are allowed',
                invalid: 'Invalid address',
                myContactExists: 'This contact already exists in own wallets',
                contactExists: 'This contact already exists in other wallets',
            },
        },
    },
    locking: {
        errors: {
            unableToFetch: 'Unable to fetch unlock transaction',
            cantBeUnlockedYet: "Tokens can't be unlocked yet",
            failedToUnlock: 'Failed to unlock tokens',
        },
        tryingToUnlock: 'Trying to unlock the tokens...',
        successfullyUnlocked: 'Successfully unlocked tokens',
    },
};
