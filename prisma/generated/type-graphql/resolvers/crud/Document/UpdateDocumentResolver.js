"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDocumentResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateDocumentArgs_1 = require("./args/UpdateDocumentArgs");
const Document_1 = require("../../../models/Document");
const helpers_1 = require("../../../helpers");
let UpdateDocumentResolver = class UpdateDocumentResolver {
    async updateDocument(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).document.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpdateDocumentResolver.prototype, "updateDocument", null);
UpdateDocumentResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Document_1.Document)
], UpdateDocumentResolver);
exports.UpdateDocumentResolver = UpdateDocumentResolver;