"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateArtworkResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateArtworkArgs_1 = require("./args/AggregateArtworkArgs");
const Artwork_1 = require("../../../models/Artwork");
const AggregateArtwork_1 = require("../../outputs/AggregateArtwork");
const helpers_1 = require("../../../helpers");
let AggregateArtworkResolver = class AggregateArtworkResolver {
    async aggregateArtwork(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).artwork.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateArtwork_1.AggregateArtwork, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateArtworkArgs_1.AggregateArtworkArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateArtworkResolver.prototype, "aggregateArtwork", null);
AggregateArtworkResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Artwork_1.Artwork)
], AggregateArtworkResolver);
exports.AggregateArtworkResolver = AggregateArtworkResolver;
