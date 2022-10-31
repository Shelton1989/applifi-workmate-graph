"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEpisodeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateEpisodeArgs_1 = require("./args/CreateEpisodeArgs");
const Episode_1 = require("../../../models/Episode");
const helpers_1 = require("../../../helpers");
let CreateEpisodeResolver = class CreateEpisodeResolver {
    async createEpisode(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateEpisodeArgs_1.CreateEpisodeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateEpisodeResolver.prototype, "createEpisode", null);
CreateEpisodeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Episode_1.Episode)
], CreateEpisodeResolver);
exports.CreateEpisodeResolver = CreateEpisodeResolver;
