"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueArtworkResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueArtworkArgs_1 = require("./args/FindUniqueArtworkArgs");
const Artwork_1 = require("../../../models/Artwork");
const helpers_1 = require("../../../helpers");
let FindUniqueArtworkResolver = class FindUniqueArtworkResolver {
    async artwork(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).artwork.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Artwork_1.Artwork, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueArtworkArgs_1.FindUniqueArtworkArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueArtworkResolver.prototype, "artwork", null);
FindUniqueArtworkResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Artwork_1.Artwork)
], FindUniqueArtworkResolver);
exports.FindUniqueArtworkResolver = FindUniqueArtworkResolver;
