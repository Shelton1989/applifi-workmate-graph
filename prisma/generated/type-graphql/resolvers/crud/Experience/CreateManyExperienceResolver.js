"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyExperienceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateManyExperienceArgs_1 = require("./args/CreateManyExperienceArgs");
const Experience_1 = require("../../../models/Experience");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyExperienceResolver = class CreateManyExperienceResolver {
    async createManyExperience(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).experience.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyExperienceArgs_1.CreateManyExperienceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyExperienceResolver.prototype, "createManyExperience", null);
CreateManyExperienceResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Experience_1.Experience)
], CreateManyExperienceResolver);
exports.CreateManyExperienceResolver = CreateManyExperienceResolver;
