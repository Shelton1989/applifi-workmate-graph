"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateEpisodeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateEpisodeArgs_1 = require("./args/AggregateEpisodeArgs");
const Episode_1 = require("../../../models/Episode");
const AggregateEpisode_1 = require("../../outputs/AggregateEpisode");
const helpers_1 = require("../../../helpers");
let AggregateEpisodeResolver = class AggregateEpisodeResolver {
    async aggregateEpisode(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateEpisode_1.AggregateEpisode, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateEpisodeArgs_1.AggregateEpisodeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateEpisodeResolver.prototype, "aggregateEpisode", null);
AggregateEpisodeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Episode_1.Episode)
], AggregateEpisodeResolver);
exports.AggregateEpisodeResolver = AggregateEpisodeResolver;
