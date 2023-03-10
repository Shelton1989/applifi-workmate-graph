"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertWardResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertWardArgs_1 = require("./args/UpsertWardArgs");
const Ward_1 = require("../../../models/Ward");
const helpers_1 = require("../../../helpers");
let UpsertWardResolver = class UpsertWardResolver {
    async upsertWard(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ward.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Ward_1.Ward, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertWardArgs_1.UpsertWardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertWardResolver.prototype, "upsertWard", null);
UpsertWardResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Ward_1.Ward)
], UpsertWardResolver);
exports.UpsertWardResolver = UpsertWardResolver;
