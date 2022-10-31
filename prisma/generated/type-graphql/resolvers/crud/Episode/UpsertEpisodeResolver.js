"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertEpisodeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertEpisodeArgs_1 = require("./args/UpsertEpisodeArgs");
const Episode_1 = require("../../../models/Episode");
const helpers_1 = require("../../../helpers");
let UpsertEpisodeResolver = class UpsertEpisodeResolver {
    async upsertEpisode(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Episode_1.Episode, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertEpisodeArgs_1.UpsertEpisodeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertEpisodeResolver.prototype, "upsertEpisode", null);
UpsertEpisodeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Episode_1.Episode)
], UpsertEpisodeResolver);
exports.UpsertEpisodeResolver = UpsertEpisodeResolver;
