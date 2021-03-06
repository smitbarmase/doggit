import { buildSchema } from "type-graphql";

import { FollowResolver } from "../resolvers/follow/mutation/follow";
import { UnfollowResolver } from "../resolvers/follow/mutation/unfollow";
import { FollowedResolver } from "../resolvers/user/field/followed";

import { FollowersResolver } from "../resolvers/follow/query/followers";
import { FollowingResolver } from "../resolvers/follow/query/following";

import { CreateCommentResolver } from "../resolvers/comment/mutation/create-comment";
import { CommentsResolver } from "../resolvers/comment/query/comments";

import { CreateReplyResolver } from "../resolvers/reply/mutation/create-reply";
import { RepliesResolver } from "../resolvers/reply/query/replies";

import { CreatePostResolver } from "../resolvers/post/mutation/create-post";
import { DeletePostResolver } from "../resolvers/post/mutation/delete-post";
import { UpdatePostResolver } from "../resolvers/post/mutation/update-post";
import { DeletePostsResolver } from "../resolvers/post/mutation/delete-posts";

import { PostResolver } from "../resolvers/post/query/post";
import { UserPostsResolver } from "../resolvers/post/query/user-posts";
import { FollowingPostsResolver } from "../resolvers/post/query/following-posts";
import { TrendingPostsResolver } from "../resolvers/post/query/trending-posts";

import { EmailResolver } from "../resolvers/user/field/email";
import { ChangePasswordResolver } from "../resolvers/user/mutation/change-password";
import { ForgotPasswordResolver } from "../resolvers/user/mutation/forgot-password";
import { LoginResolver } from "../resolvers/user/mutation/login";
import { LogoutResolver } from "../resolvers/user/mutation/logout";
import { SendCodeResolver } from "../resolvers/user/mutation/send-code";
import { SignupResolver } from "../resolvers/user/mutation/signup";
import { DeleteUserResolver } from "../resolvers/user/mutation/delete-user";

import { MeResolver } from "../resolvers/user/query/me";
import { UserResolver } from "../resolvers/user/query/user";
import { UsersResolver } from "../resolvers/user/query/users";

import { EmailExistResolver } from "../resolvers/user/query/email-exist";
import { UsernameExistResolver } from "../resolvers/user/query/username-exist";

import { UpvotePostResolver } from "../resolvers/vote-post/mutation/upvote-post";
import { DownvotePostResolver } from "../resolvers/vote-post/mutation/downvote-post";
import { DeleteVotePostResolver } from "../resolvers/vote-post/mutation/delete-vote-post";

import { UpvoteCommentResolver } from "../resolvers/vote-comment/mutation/upvote-comment";
import { DownvoteCommentResolver } from "../resolvers/vote-comment/mutation/downvote-comment";
import { DeleteVoteCommentResolver } from "../resolvers/vote-comment/mutation/delete-vote-comment";

import { UpvoteReplyResolver } from "../resolvers/vote-reply/mutation/upvote-reply";
import { DownvoteReplyResolver } from "../resolvers/vote-reply/mutation/downvote-reply";
import { DeleteVoteReplyResolver } from "../resolvers/vote-reply/mutation/delete-vote-reply";

import { VoteStatusResolver as VotePostStatusResolver } from "../resolvers/post/field/vote-status";
import { VoteStatusResolver as VoteCommentStatusResolver } from "../resolvers/comment/field/vote-status";
import { VoteStatusResolver as VoteReplyStatusResolver } from "../resolvers/reply/field/vote-status";

export const createSchema = () =>
  buildSchema({
    resolvers: [
      MeResolver,
      SignupResolver,
      LoginResolver,
      LogoutResolver,
      SendCodeResolver,
      ForgotPasswordResolver,
      ChangePasswordResolver,
      EmailResolver,
      DeleteUserResolver,

      UserResolver,
      UsersResolver,
      FollowedResolver,

      EmailExistResolver,
      UsernameExistResolver,

      CreateCommentResolver,
      CommentsResolver,

      CreateReplyResolver,
      RepliesResolver,

      CreatePostResolver,
      DeletePostResolver,
      UpdatePostResolver,
      DeletePostsResolver,

      PostResolver,
      UserPostsResolver,
      FollowingPostsResolver,
      TrendingPostsResolver,

      FollowResolver,
      UnfollowResolver,

      FollowersResolver,
      FollowingResolver,

      UpvotePostResolver,
      DownvotePostResolver,
      DeleteVotePostResolver,

      UpvoteCommentResolver,
      DownvoteCommentResolver,
      DeleteVoteCommentResolver,

      UpvoteReplyResolver,
      DownvoteReplyResolver,
      DeleteVoteReplyResolver,

      VotePostStatusResolver,
      VoteCommentStatusResolver,
      VoteReplyStatusResolver,
    ],
    validate: false,
  });
