"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRequestResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateRequestArgs_1 = require("./args/AggregateRequestArgs");
const Request_1 = require("../../../models/Request");
const AggregateRequest_1 = require("../../outputs/AggregateRequest");
const helpers_1 = require("../../../helpers");
let AggregateRequestResolver = class AggregateRequestResolver {
    async aggregateRequest(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).request.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateRequest_1.AggregateRequest, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateRequestArgs_1.AggregateRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateRequestResolver.prototype, "aggregateRequest", null);
AggregateRequestResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Request_1.Request)
], AggregateRequestResolver);
exports.AggregateRequestResolver = AggregateRequestResolver;
