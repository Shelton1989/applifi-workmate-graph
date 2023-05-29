"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Comment_1 = require("../../../models/Comment");
const Document_1 = require("../../../models/Document");
const Tenant_1 = require("../../../models/Tenant");
const DocumentCommentsArgs_1 = require("./args/DocumentCommentsArgs");
const helpers_1 = require("../../../helpers");
let DocumentRelationsResolver = class DocumentRelationsResolver {
    async Tenant(document, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).document.findUnique({
            where: {
                id: document.id,
            },
        }).Tenant({});
    }
    async Comments(document, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).document.findUnique({
            where: {
                id: document.id,
            },
        }).Comments(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Tenant_1.Tenant, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Document_1.Document, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DocumentRelationsResolver.prototype, "Tenant", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Comment_1.Comment], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Document_1.Document, Object, DocumentCommentsArgs_1.DocumentCommentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DocumentRelationsResolver.prototype, "Comments", null);
DocumentRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Document_1.Document)
], DocumentRelationsResolver);
exports.DocumentRelationsResolver = DocumentRelationsResolver;
