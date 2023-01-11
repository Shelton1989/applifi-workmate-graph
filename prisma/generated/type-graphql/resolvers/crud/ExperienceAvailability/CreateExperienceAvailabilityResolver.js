"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateExperienceAvailabilityResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateExperienceAvailabilityArgs_1 = require("./args/CreateExperienceAvailabilityArgs");
const ExperienceAvailability_1 = require("../../../models/ExperienceAvailability");
const helpers_1 = require("../../../helpers");
let CreateExperienceAvailabilityResolver = class CreateExperienceAvailabilityResolver {
    async createExperienceAvailability(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).experienceAvailability.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ExperienceAvailability_1.ExperienceAvailability, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateExperienceAvailabilityArgs_1.CreateExperienceAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateExperienceAvailabilityResolver.prototype, "createExperienceAvailability", null);
CreateExperienceAvailabilityResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ExperienceAvailability_1.ExperienceAvailability)
], CreateExperienceAvailabilityResolver);
exports.CreateExperienceAvailabilityResolver = CreateExperienceAvailabilityResolver;
