"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSizeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateSizeArgs_1 = require("./args/CreateSizeArgs");
const Size_1 = require("../../../models/Size");
const helpers_1 = require("../../../helpers");
let CreateSizeResolver = class CreateSizeResolver {
    async createSize(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).size.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Size_1.Size, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateSizeArgs_1.CreateSizeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateSizeResolver.prototype, "createSize", null);
CreateSizeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Size_1.Size)
], CreateSizeResolver);
exports.CreateSizeResolver = CreateSizeResolver;
