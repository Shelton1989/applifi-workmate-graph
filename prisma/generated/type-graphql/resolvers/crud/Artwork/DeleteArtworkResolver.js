"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteArtworkResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteArtworkArgs_1 = require("./args/DeleteArtworkArgs");
const Artwork_1 = require("../../../models/Artwork");
const helpers_1 = require("../../../helpers");
let DeleteArtworkResolver = class DeleteArtworkResolver {
    async deleteArtwork(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).artwork.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Artwork_1.Artwork, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteArtworkArgs_1.DeleteArtworkArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteArtworkResolver.prototype, "deleteArtwork", null);
DeleteArtworkResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Artwork_1.Artwork)
], DeleteArtworkResolver);
exports.DeleteArtworkResolver = DeleteArtworkResolver;
