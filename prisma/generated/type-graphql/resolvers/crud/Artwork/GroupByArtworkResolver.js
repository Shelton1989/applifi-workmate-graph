"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByArtworkResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByArtworkArgs_1 = require("./args/GroupByArtworkArgs");
const Artwork_1 = require("../../../models/Artwork");
const ArtworkGroupBy_1 = require("../../outputs/ArtworkGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByArtworkResolver = class GroupByArtworkResolver {
    async groupByArtwork(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).artwork.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ArtworkGroupBy_1.ArtworkGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByArtworkArgs_1.GroupByArtworkArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByArtworkResolver.prototype, "groupByArtwork", null);
GroupByArtworkResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Artwork_1.Artwork)
], GroupByArtworkResolver);
exports.GroupByArtworkResolver = GroupByArtworkResolver;
