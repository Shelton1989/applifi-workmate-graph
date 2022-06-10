"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateArtworkArgs_1 = require("./args/AggregateArtworkArgs");
const CreateArtworkArgs_1 = require("./args/CreateArtworkArgs");
const CreateManyArtworkArgs_1 = require("./args/CreateManyArtworkArgs");
const DeleteArtworkArgs_1 = require("./args/DeleteArtworkArgs");
const DeleteManyArtworkArgs_1 = require("./args/DeleteManyArtworkArgs");
const FindFirstArtworkArgs_1 = require("./args/FindFirstArtworkArgs");
const FindManyArtworkArgs_1 = require("./args/FindManyArtworkArgs");
const FindUniqueArtworkArgs_1 = require("./args/FindUniqueArtworkArgs");
const GroupByArtworkArgs_1 = require("./args/GroupByArtworkArgs");
const UpdateArtworkArgs_1 = require("./args/UpdateArtworkArgs");
const UpdateManyArtworkArgs_1 = require("./args/UpdateManyArtworkArgs");
const UpsertArtworkArgs_1 = require("./args/UpsertArtworkArgs");
const helpers_1 = require("../../../helpers");
const Artwork_1 = require("../../../models/Artwork");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateArtwork_1 = require("../../outputs/AggregateArtwork");
const ArtworkGroupBy_1 = require("../../outputs/ArtworkGroupBy");
let ArtworkCrudResolver = class ArtworkCrudResolver {
    async artwork(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).artwork.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstArtwork(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).artwork.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async artworks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).artwork.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createArtwork(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).artwork.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyArtwork(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).artwork.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteArtwork(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).artwork.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateArtwork(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).artwork.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyArtwork(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).artwork.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyArtwork(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).artwork.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertArtwork(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).artwork.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateArtwork(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).artwork.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByArtwork(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).artwork.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
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
], ArtworkCrudResolver.prototype, "artwork", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Artwork_1.Artwork, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstArtworkArgs_1.FindFirstArtworkArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ArtworkCrudResolver.prototype, "findFirstArtwork", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Artwork_1.Artwork], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyArtworkArgs_1.FindManyArtworkArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ArtworkCrudResolver.prototype, "artworks", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Artwork_1.Artwork, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateArtworkArgs_1.CreateArtworkArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ArtworkCrudResolver.prototype, "createArtwork", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyArtworkArgs_1.CreateManyArtworkArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ArtworkCrudResolver.prototype, "createManyArtwork", null);
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
], ArtworkCrudResolver.prototype, "deleteArtwork", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Artwork_1.Artwork, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateArtworkArgs_1.UpdateArtworkArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ArtworkCrudResolver.prototype, "updateArtwork", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyArtworkArgs_1.DeleteManyArtworkArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ArtworkCrudResolver.prototype, "deleteManyArtwork", null);
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
], ArtworkCrudResolver.prototype, "updateManyArtwork", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Artwork_1.Artwork, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertArtworkArgs_1.UpsertArtworkArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ArtworkCrudResolver.prototype, "upsertArtwork", null);
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
], ArtworkCrudResolver.prototype, "aggregateArtwork", null);
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
], ArtworkCrudResolver.prototype, "groupByArtwork", null);
ArtworkCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Artwork_1.Artwork)
], ArtworkCrudResolver);
exports.ArtworkCrudResolver = ArtworkCrudResolver;
