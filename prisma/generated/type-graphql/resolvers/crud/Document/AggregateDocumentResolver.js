"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDocumentResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateDocumentArgs_1 = require("./args/AggregateDocumentArgs");
const Document_1 = require("../../../models/Document");
const AggregateDocument_1 = require("../../outputs/AggregateDocument");
const helpers_1 = require("../../../helpers");
let AggregateDocumentResolver = class AggregateDocumentResolver {
    async aggregateDocument(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).document.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
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
], AggregateDocumentResolver.prototype, "aggregateDocument", null);
AggregateDocumentResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Document_1.Document)
], AggregateDocumentResolver);
exports.AggregateDocumentResolver = AggregateDocumentResolver;
