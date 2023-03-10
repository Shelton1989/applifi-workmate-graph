"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteWardResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteWardArgs_1 = require("./args/DeleteWardArgs");
const Ward_1 = require("../../../models/Ward");
const helpers_1 = require("../../../helpers");
let DeleteWardResolver = class DeleteWardResolver {
    async deleteWard(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ward.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Ward_1.Ward, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteWardArgs_1.DeleteWardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteWardResolver.prototype, "deleteWard", null);
DeleteWardResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Ward_1.Ward)
], DeleteWardResolver);
exports.DeleteWardResolver = DeleteWardResolver;
