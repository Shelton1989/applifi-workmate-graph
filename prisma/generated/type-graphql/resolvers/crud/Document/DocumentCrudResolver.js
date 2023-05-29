"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateDocumentArgs_1 = require("./args/AggregateDocumentArgs");
const CreateDocumentArgs_1 = require("./args/CreateDocumentArgs");
const CreateManyDocumentArgs_1 = require("./args/CreateManyDocumentArgs");
const DeleteDocumentArgs_1 = require("./args/DeleteDocumentArgs");
const DeleteManyDocumentArgs_1 = require("./args/DeleteManyDocumentArgs");
const FindFirstDocumentArgs_1 = require("./args/FindFirstDocumentArgs");
const FindManyDocumentArgs_1 = require("./args/FindManyDocumentArgs");
const FindUniqueDocumentArgs_1 = require("./args/FindUniqueDocumentArgs");
const GroupByDocumentArgs_1 = require("./args/GroupByDocumentArgs");
const UpdateDocumentArgs_1 = require("./args/UpdateDocumentArgs");
const UpdateManyDocumentArgs_1 = require("./args/UpdateManyDocumentArgs");
const UpsertDocumentArgs_1 = require("./args/UpsertDocumentArgs");
const helpers_1 = require("../../../helpers");
const Document_1 = require("../../../models/Document");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateDocument_1 = require("../../outputs/AggregateDocument");
const DocumentGroupBy_1 = require("../../outputs/DocumentGroupBy");
let DocumentCrudResolver = class DocumentCrudResolver {
    async document(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).document.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstDocument(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).document.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async documents(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).document.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createDocument(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).document.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyDocument(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).document.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteDocument(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).document.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateDocument(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).document.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyDocument(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).document.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyDocument(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).document.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertDocument(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).document.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateDocument(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).document.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByDocument(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).document.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Document_1.Document, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueDocumentArgs_1.FindUniqueDocumentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DocumentCrudResolver.prototype, "document", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Document_1.Document, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstDocumentArgs_1.FindFirstDocumentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DocumentCrudResolver.prototype, "findFirstDocument", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Document_1.Document], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyDocumentArgs_1.FindManyDocumentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DocumentCrudResolver.prototype, "documents", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Document_1.Document, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateDocumentArgs_1.CreateDocumentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DocumentCrudResolver.prototype, "createDocument", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyDocumentArgs_1.CreateManyDocumentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DocumentCrudResolver.prototype, "createManyDocument", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Document_1.Document, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteDocumentArgs_1.DeleteDocumentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DocumentCrudResolver.prototype, "deleteDocument", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Document_1.Document, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateDocumentArgs_1.UpdateDocumentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DocumentCrudResolver.prototype, "updateDocument", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyDocumentArgs_1.DeleteManyDocumentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DocumentCrudResolver.prototype, "deleteManyDocument", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyDocumentArgs_1.UpdateManyDocumentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DocumentCrudResolver.prototype, "updateManyDocument", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Document_1.Document, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertDocumentArgs_1.UpsertDocumentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DocumentCrudResolver.prototype, "upsertDocument", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateDocument_1.AggregateDocument, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateDocumentArgs_1.AggregateDocumentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DocumentCrudResolver.prototype, "aggregateDocument", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [DocumentGroupBy_1.DocumentGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByDocumentArgs_1.GroupByDocumentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DocumentCrudResolver.prototype, "groupByDocument", null);
DocumentCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Document_1.Document)
], DocumentCrudResolver);
exports.DocumentCrudResolver = DocumentCrudResolver;
