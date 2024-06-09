/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Watchlist } from "./Watchlist";
import { WatchlistCountArgs } from "./WatchlistCountArgs";
import { WatchlistFindManyArgs } from "./WatchlistFindManyArgs";
import { WatchlistFindUniqueArgs } from "./WatchlistFindUniqueArgs";
import { DeleteWatchlistArgs } from "./DeleteWatchlistArgs";
import { WatchlistService } from "../watchlist.service";
@graphql.Resolver(() => Watchlist)
export class WatchlistResolverBase {
  constructor(protected readonly service: WatchlistService) {}

  async _watchlistsMeta(
    @graphql.Args() args: WatchlistCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Watchlist])
  async watchlists(
    @graphql.Args() args: WatchlistFindManyArgs
  ): Promise<Watchlist[]> {
    return this.service.watchlists(args);
  }

  @graphql.Query(() => Watchlist, { nullable: true })
  async watchlist(
    @graphql.Args() args: WatchlistFindUniqueArgs
  ): Promise<Watchlist | null> {
    const result = await this.service.watchlist(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Watchlist)
  async deleteWatchlist(
    @graphql.Args() args: DeleteWatchlistArgs
  ): Promise<Watchlist | null> {
    try {
      return await this.service.deleteWatchlist(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
