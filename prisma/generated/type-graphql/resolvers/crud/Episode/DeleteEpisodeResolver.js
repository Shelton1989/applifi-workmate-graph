"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEpisodeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteEpisodeArgs_1 = require("./args/DeleteEpisodeArgs");
const Episode_1 = require("../../../models/Episode");
const helpers_1 = require("../../../helpers");
let DeleteEpisodeResolver = class DeleteEpisodeResolver {
    async deleteEpisode(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Episode_1.Episode, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteEpisodeArgs_1.DeleteEpisodeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteEpisodeResolver.prototype, "deleteEpisode", null);
DeleteEpisodeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Episode_1.Episode)
], DeleteEpisodeResolver);
exports.DeleteEpisodeResolver = DeleteEpisodeResolver;
