export interface Comment {
    commentID: number;
    status: string;
    commentSequence: number;
    userID: number;
    userDisplayName: string;
    userLocation: string;
    userTitle: null | string;
    userURL: null | string;
    picURL: null | string;
    commentTitle: string;
    commentBody: string;
    createDate: string;
    updateDate: string;
    approveDate: string;
    recommendations: number;
    replyCount: number;
    replies: Object;
    editorsSelection: boolean;
    parentID: null | string;
    parentUserDisplayName: null | string;
    depth: number;
    commentType: string;
    trusted: number;
    recommendedFlag: number;
    permID: string;
    isAnonymous: boolean
}