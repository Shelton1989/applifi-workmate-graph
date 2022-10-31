"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstEpisodeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstEpisodeArgs_1 = require("./args/FindFirstEpisodeArgs");
const Episode_1 = require("../../../models/Episode");
const helpers_1 = require("../../../helpers");
let FindFirstEpisodeResolver = class FindFirstEpisodeResolver {
    async findFirstEpisode(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Episode_1.Episode, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstEpisodeArgs_1.FindFirstEpisodeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstEpisodeResolver.prototype, "findFirstEpisode", null);
FindFirstEpisodeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Episode_1.Episode)
], FindFirstEpisodeResolver);
exports.FindFirstEpisodeResolver = FindFirstEpisodeResolver;
