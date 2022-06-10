"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyArtworkResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyArtworkArgs_1 = require("./args/UpdateManyArtworkArgs");
const Artwork_1 = require("../../../models/Artwork");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyArtworkResolver = class UpdateManyArtworkResolver {
    async updateManyArtwork(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).artwork.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyArtworkArgs_1.UpdateManyArtworkArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyArtworkResolver.prototype, "updateManyArtwork", null);
UpdateManyArtworkResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Artwork_1.Artwork)
], UpdateManyArtworkResolver);
exports.UpdateManyArtworkResolver = UpdateManyArtworkResolver;
