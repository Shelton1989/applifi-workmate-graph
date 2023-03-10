"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateWardResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateWardArgs_1 = require("./args/AggregateWardArgs");
const Ward_1 = require("../../../models/Ward");
const AggregateWard_1 = require("../../outputs/AggregateWard");
const helpers_1 = require("../../../helpers");
let AggregateWardResolver = class AggregateWardResolver {
    async aggregateWard(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).ward.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateWard_1.AggregateWard, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateWardArgs_1.AggregateWardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateWardResolver.prototype, "aggregateWard", null);
AggregateWardResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Ward_1.Ward)
], AggregateWardResolver);
exports.AggregateWardResolver = AggregateWardResolver;
